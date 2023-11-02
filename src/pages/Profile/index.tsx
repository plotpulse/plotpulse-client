import { useState, useEffect } from "react";
import { PageWrapper, Dashboard } from "../../components"
import { useAuth0 } from "@auth0/auth0-react";
import { IProfile } from "../../shared-types";
import { getProfile, } from "../../utilities/auth-services";
import { Skeleton, Text } from "@chakra-ui/react";




export function Profile() {

    // REFACTOR to state management
    const { user, getAccessTokenSilently } = useAuth0()
    const [profile, setProfile] = useState<IProfile | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    const email = user?.email ? user.email : ""

    async function handleFetchProfile() {

        try {
            const response = await getProfile(await getAccessTokenSilently(), email)

            if (response?.id === email) {
                setProfile(response)
            } else {
                throw new Error("There was an issue loading your associated profile.")
            }

        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => { handleFetchProfile() }, [isLoading])



    

    return (
        <PageWrapper>
            <Text>{user ? `User is ${email}` : "Please log in"}</Text>

            <Skeleton isLoaded={!isLoading}>
                <Dashboard profile={profile} />

            </Skeleton>

        </PageWrapper>
    )
}
import { useState, useEffect } from "react";
import { PageWrapper, Dashboard } from "../../components"
import { useAuth0} from "@auth0/auth0-react";
import { IProfile } from "../../shared-types";
import { getProfile, } from "../../utilities/auth-services";
import { Text } from "@chakra-ui/react";




export function Profile() {

    // REFACTOR to state management
    const { user, getAccessTokenSilently} = useAuth0()
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

    function loaded() {

        console.log("checking profile @ loaded function", profile)

        return (
            <>
                <Dashboard /> 
            </>
        )
    }

    useEffect(() => { handleFetchProfile() }, [isLoading])



    return (
        <PageWrapper>
            <Text>{user ? `User is ${email}` : "Please log in"}</Text>

            {isLoading ? <p>Loading...</p> : loaded()}

        </PageWrapper>
    )
}
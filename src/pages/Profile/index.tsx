import { useState, useEffect } from "react";
import { PageWrapper, SignUpForm, Dashboard } from "../../components"
import { useAuth0 } from "@auth0/auth0-react";
import { IProfile } from "../../shared-types";
import { getProfile, createProfile } from "../../utilities/auth-services";
import { Button, Text } from "@chakra-ui/react";




export function Profile() {

    const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0()
    const [profile, setProfile] = useState<IProfile | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // if (!user){
    //     loginWithRedirect()
    // }

    const email = user?.email ?? ""

    const mockProfile: IProfile = {
        id: email,
        genres: ["a", "b", "c"],
        bio: "abc"
    }


    async function handleFetchProfile() {
        if (!user) {
            loginWithRedirect()
            return
        }

        try {
            const response = await getProfile(await getAccessTokenSilently(), email)

            if (response?.id === email){
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
                {profile ? <Dashboard /> : <SignUpForm email={email}/>}

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
import { useState, useEffect } from "react";
import { PageWrapper, SignUpForm } from "../../components"
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
        genres: "a, b, c",
        bio: "abc"
    }

    async function handleFetchProfile() {

        try {
            const response = await getProfile(await getAccessTokenSilently(), email)
            setProfile(response)
            setIsLoading(false)
            
        } catch (error) {
            
        }

    }




    async function handleNewProfile() {
        try {
            if (!user) return


            const profileResponse = await createProfile(mockProfile)
            console.log(profileResponse)


            // const token = await getAccessTokenSilently()
            // const profResponse = await getProfile(token, email)

        } catch (error) {

        }
    }

    useEffect(() => { handleFetchProfile() }, [isLoading])

    return (
        <PageWrapper>
            <Text>{user ? "Hello" : "Please log in"}</Text>

            <Button onClick={handleNewProfile}>Request handler</Button>

            {/* {profile ? <Dashboard /> : <SignUpForm />} */}





        </PageWrapper>
    )
}
import { useState } from "react";
import { PageWrapper } from "../../components"
import { useAuth0 } from "@auth0/auth0-react";
import { IProfile } from "../../shared-types";
import { getProfile, createProfile } from "../../utilities/auth-services";
import { Button, Text } from "@chakra-ui/react";




export function Profile(){

    const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0()
    const [ profile, setProfile ] = useState<IProfile | null>(null)

    // if (!user){
    //     loginWithRedirect()
    // }
   
            
            
            

    async function handleRequest(){
        try {
            if (!user) return
            const email = user?.email ?? ""

            const mockProfile: IProfile = {
                id: email,
                genres: "a, b, c",
                bio: "abc"
            }
        
            const profileResponse = await createProfile(mockProfile)
            console.log(profileResponse)


            // const token = await getAccessTokenSilently()
            // const profResponse = await getProfile(token, email)



            // if there is a profile, we will display the profile




            // if there is no profile, we will display the create profile UI
            
        } catch (error) {
            
        }
    }

    return (
        <PageWrapper>
            <Text>{user ? "Hello" : "Please log in"}</Text>

            <Button onClick={handleRequest}>Request handler</Button>





        </PageWrapper>
    )
}
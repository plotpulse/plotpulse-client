import { useState } from "react";
import { PageWrapper } from "../../components"
import { useAuth0 } from "@auth0/auth0-react";
import { IUserProfile } from "../../shared-types";
import { getProfile } from "../../utilities/auth-services";


export function Profile(){

    const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0()
    const [ profile, setProfile ] = useState<IUserProfile | null>(null)

    if (!user){
        loginWithRedirect()
    }

    async function handleRequest(){
        try {
            const token = await getAccessTokenSilently()
            const { email } = user
            const profResponse = await getProfile(token, user?.email)



            // if there is a profile, we will display the profile




            // if there is no profile, we will display the create profile UI
            
        } catch (error) {
            
        }
    }

    return (
        <PageWrapper>





        </PageWrapper>
    )
}
import { PageWrapper, SignUpForm } from "../../components";
import { useAuth0 } from '@auth0/auth0-react'


export function SignUp(){
    const { user, isLoading } = useAuth0()

    function loaded(){
        if (!user?.email){
            return (
                <p>Yikes</p>
            )
        }

        const { email } = user
        console.log('sign up page', email)

        return (
            <SignUpForm email={email} />

        )
    }

    return (
        <PageWrapper>

            {isLoading ? <p>Loading...</p> : loaded()}

            

            
        </PageWrapper>
    )
}
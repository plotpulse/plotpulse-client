import { PageWrapper, SignUpForm } from "../../components";
import { useAuth0 } from '@auth0/auth0-react'


export function SignUp(){
    const { user } = useAuth0()

    const email = user?.email

    return (
        <PageWrapper>

            <SignUpForm email={email} />

            
        </PageWrapper>
    )
}
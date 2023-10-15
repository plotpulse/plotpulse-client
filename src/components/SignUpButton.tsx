import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

export function SignUpButton(){
    const { loginWithPopup } = useAuth0();

    return <Button onClick={() => loginWithPopup()}>SignUp</Button>
}
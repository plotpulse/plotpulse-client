import {useAuth0} from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";


export function LogoutButton(){
    const { logout } = useAuth0()

    return (
      <Button onClick={() => logout({logoutParams: { returnTo: window.location.origin}})}>
        Log Out
      </Button>
    );
}
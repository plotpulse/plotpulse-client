import { HStack, Link as ChakraLink, Button, useColorMode } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { LoginButton, LogoutButton } from "."

export function Navbar(){
    const { toggleColorMode } = useColorMode()

    return (
        <HStack bg='secondary.200'>
            <ChakraLink
            as={RouterLink}
            to='/' >
                Home
            </ChakraLink>
            <ChakraLink
            as={RouterLink}
            to='/prompts' >
                Prompts
            </ChakraLink>
            <Button onClick={toggleColorMode}>Color</Button>
            <LoginButton/>
            <LogoutButton/>


        </HStack>
        )
}


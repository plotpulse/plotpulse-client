import { HStack, Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'

export function Navbar(){

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


        </HStack>
        )
}


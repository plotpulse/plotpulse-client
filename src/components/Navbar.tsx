import { HStack, Link as ChakraLink, Button, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { LoginButton, LogoutButton } from "."
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Navbar(){
    const { toggleColorMode } = useColorMode()
    const iconValue = useColorModeValue(<MoonIcon/>, <SunIcon/>)
    const bgValue = useColorModeValue('background.100', 'background.800')

    return (
        <HStack bg={bgValue}>
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
            <IconButton 
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            icon={iconValue}>
                
              </IconButton>


        </HStack>
        )
}


import { HStack, Link as ChakraLink, Button, useColorMode, useColorModeValue, IconButton, Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { LoginButton, LogoutButton } from "."
import { MoonIcon, SunIcon, SettingsIcon } from '@chakra-ui/icons'

export function Navbar() {
    const { toggleColorMode } = useColorMode()
    const iconValue = useColorModeValue(<MoonIcon />, <SunIcon />)
    const bgValue = useColorModeValue('background.100', 'background.800')
    const srcValue = useColorModeValue('/black-books.svg', '/white-books.svg')

    return (
        <Box bg={bgValue} p={4}>
            <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Flex alignItems={'center'} gap={2}>
                    <ChakraLink
                        px={4}
                        py={2}
                        borderRadius={'.25rem'}
                        as={RouterLink}
                        to='/'
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('background.200', 'background.600')
                        }}>
                        <HStack>
                            <Image boxSize={'1.5rem'} src={srcValue} />
                            <Heading size={"sm"}>PlotPulse</Heading>
                        </HStack>

                    </ChakraLink>
                    <ChakraLink
                        px={4}
                        py={2}
                        borderRadius={'.25rem'}
                        as={RouterLink}
                        to='/prompts'
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('background.200', 'background.600')
                        }}>

                        <Heading size={"sm"}>
                            Prompts
                        </Heading>
                    </ChakraLink>
                </Flex>
                <Flex gap={2}>
                    <IconButton
                        variant={'brandSecondary'}
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        icon={iconValue}>
                    </IconButton>

                    <IconButton
                        variant={'brandSecondary'}
                        aria-label="User Profile Settings"
                        icon={<SettingsIcon />}>
                    </IconButton>
                </Flex>
            </Flex>
        </Box >
    )
}


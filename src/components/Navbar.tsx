import { HStack, Link as ChakraLink, useColorMode, useColorModeValue, IconButton, Box, Flex, Heading, Image, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useAuth0, RedirectLoginOptions } from '@auth0/auth0-react'

export function Navbar() {
    const { toggleColorMode } = useColorMode()
    const iconValue = useColorModeValue(<MoonIcon />, <SunIcon />)
    const bgValue = useColorModeValue('background.100', 'background.800')
    const srcValue = useColorModeValue('/black-books.svg', '/white-books.svg')

    const { user, loginWithRedirect, logout } = useAuth0()

    // REFACTOR to an env, possibly with a "constants" import folder
    // REFACTOR to handle for deployment

    const signup: RedirectLoginOptions = {
        authorizationParams: { redirect_uri: "http://localhost:5173/signup" }
    }

    const login: RedirectLoginOptions = {
        authorizationParams: { redirect_uri: "http://localhost:5173/profile" }
    }

    return (
        <Box bg={bgValue} p={4} maxH={'10vh'}>
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

                </Flex>
                <Flex gap={2}>
                    <IconButton
                        variant={'brandSecondary'}
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        icon={iconValue}>
                    </IconButton>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton as={IconButton}
                                    variant={'brandSecondary'}
                                    aria-label="Hamburger Menu"
                                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}>

                                </MenuButton>
                                <MenuList>
                                    <MenuItem>
                                        <ChakraLink
                                            as={RouterLink}
                                            to='/prompts'>
                                            Prompts
                                        </ChakraLink>
                                    </MenuItem>

                                    {user ?
                                        <>
                                            <MenuItem>
                                                <ChakraLink
                                                    as={RouterLink}
                                                    to='/profile'>
                                                    Profile
                                                </ChakraLink>
                                            </MenuItem>

                                            <MenuItem onClick={() => logout()}>
                                                Log Out
                                            </MenuItem>
                                        </>

                                        :
                                        <>
                                            <MenuItem onClick={() => loginWithRedirect(signup)}>
                                                Sign Up
                                            </MenuItem>

                                            <MenuItem onClick={() => loginWithRedirect(login)}>
                                                Log In
                                            </MenuItem>
                                        </>}
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Flex>
            </Flex>
        </Box >
    )
}


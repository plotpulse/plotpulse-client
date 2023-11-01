import { HStack, Link as ChakraLink, useColorMode, useColorModeValue, IconButton, Box, Flex, Heading, Image, MenuButton, Menu, MenuList, MenuItem, } from "@chakra-ui/react"
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useAuth0, RedirectLoginOptions } from '@auth0/auth0-react'
import { getProfile } from "../utilities/auth-services"
import { useEffect, useState, } from "react"
import { IProfile } from "../shared-types"

export function Navbar() {
    const [profile, setProfile] = useState<IProfile | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    const { toggleColorMode } = useColorMode()
    const iconValue = useColorModeValue(<MoonIcon />, <SunIcon />)
    const bgValue = useColorModeValue('background.100', 'background.800')
    const srcValue = useColorModeValue('/black-books.svg', '/white-books.svg')

    const { user, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0()

    const navigate = useNavigate()

    // REFACTOR to an env, possibly with a "constants" import folder
    // REFACTOR to handle for deployment

    const signup: RedirectLoginOptions = {
        authorizationParams: { redirect_uri: "http://localhost:5173/signup" }
    }

    const login: RedirectLoginOptions = {
        authorizationParams: { redirect_uri: "http://localhost:5173/profile" }
    }

    async function handleProfile() {
        const email = user?.email ? user.email : ''
        try {
            const profileResponse = await getProfile(await getAccessTokenSilently(), email)

            if (profileResponse?.id === email) {
                setProfile(profileResponse)
            }
            setIsLoading(false)

        } catch (error) {
            // do something with the error
            setIsLoading(false)

        }

    }

    useEffect(() => { handleProfile() }, [isLoading])

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
                                    <MenuItem onClick={() => navigate('/feed')}>
                                        Feed
                                    </MenuItem>

                                    {profile ?
                                        <>
                                            <MenuItem onClick={() => navigate('/create')}>
                                                Create
                                            </MenuItem>

                                            <MenuItem onClick={() => navigate('/profile')}>
                                                Profile
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


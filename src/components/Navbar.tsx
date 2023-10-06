import { HStack, Link as ChakraLink, Button, useColorMode, useColorModeValue, IconButton, Box, Flex, Heading, Image, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { LoginButton, LogoutButton } from "."
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

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
                                            borderRadius={'.25rem'}
                                            as={RouterLink}
                                            to='/prompts'>                                            
                                                Prompts
                                        </ChakraLink>
                                    </MenuItem>

                                    <MenuItem>Link 2</MenuItem>
                                    <MenuItem>Link 3</MenuItem>
                                    <MenuItem>Link 4</MenuItem>

                                </MenuList>
                            </>

                        )}



                    </Menu>


                </Flex>
            </Flex>
        </Box >
    )
}


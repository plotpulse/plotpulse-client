import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createProfile, getProfile } from "../utilities/auth-services";
import { Box, FormControl, FormLabel, FormHelperText, Button, CheckboxGroup, Checkbox, Textarea, Input, useColorModeValue, Heading, Skeleton, } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { ALL_GENRES } from "../constants";
import { useAuth0 } from '@auth0/auth0-react'




export function SignUpForm() {

    const defaultForm = {
        displayName: "",
        roles: new Array<string>(),
        genres: new Array<string>(),
        bio: "",
        details: "",
    }

    const { user, getAccessTokenSilently } = useAuth0()
    const email = user?.email ? user.email : ""



    const [profileForm, setProfileForm] = useState(defaultForm)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    const borderValue = useColorModeValue('background.300', 'background.700')
    const focusBorderValue = useColorModeValue('accent.300', 'accent.600')


    async function handleSubmit(evt: FormEvent) {

        evt.preventDefault()

        try {
            const profileResponse = await createProfile({ ...profileForm, id: email })
            console.log('in signupform', profileResponse)

            if (profileResponse.id === email) {
                setProfileForm(defaultForm)
                navigate("/profile")

            } else {
                throw new Error("There was an issue creating your profile.")
            }

        } catch (error) {
            console.log(error)
            //do something in the UI
        }
    }

    function handleRoleChange(newValues: string[]) {
        setProfileForm({ ...profileForm, roles: newValues })

    }

    function handleGenreChange(newValues: string[]) {
        setProfileForm({ ...profileForm, genres: newValues })
    }

    function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { name, value } = evt.target
        setProfileForm({ ...profileForm, [name]: value })


    }

    async function handleProfile() {
        try {
            const profileResponse = await getProfile(await getAccessTokenSilently(), email)

            if (profileResponse?.id) {
                console.log('you have a profile')
                navigate('/profile')
            } else {
                setIsLoading(false)
            }

        } catch (error) {
            setIsLoading(false)

        }

    }

    useEffect(() => { handleProfile() }, [isLoading])

    return (
        <Box m={4} p={8} display={'flex'} flexDirection={'column'} maxW={['100%', '75%']} mx={'auto'}>
            <Skeleton isLoaded={!isLoading}>

                <Heading m={4}>Complete your account creation</Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                        <FormLabel>Display Name</FormLabel>
                        <Input focusBorderColor={focusBorderValue} name="displayName" value={profileForm.displayName} onChange={handleChange}></Input>
                        <FormHelperText>
                            How you'll be publicly identified - choose wisely, you can't change this.

                        </FormHelperText>

                    </FormControl>


                    <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                        <FormLabel>Are you...?</FormLabel>
                        <CheckboxGroup colorScheme={'accent'} variant={'brand'} defaultValue={profileForm.roles} onChange={handleRoleChange}>
                            <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={2}>
                                <Checkbox value='author'>An author</Checkbox>
                                <Checkbox value='video-game-dev'>A game developer</Checkbox>
                                <Checkbox value='screenwriter'>A screenwriter</Checkbox>
                                <Checkbox value='TTRPG-player'>A TTRPG Player</Checkbox>
                                <Checkbox value='TTRPG-DM'>A dungeon master</Checkbox>
                                <Checkbox value='fan-fiction'>A fan-fiction writer</Checkbox>
                                <Checkbox value='character-designer'>A character designer</Checkbox>
                                <Checkbox value='comic-book-writer'>A comic book writer</Checkbox>
                                <Checkbox value='something-else'>Something else</Checkbox>
                            </Box>


                        </CheckboxGroup>
                        <FormHelperText>What do you do? Help us help you.</FormHelperText>

                    </FormControl>

                    <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                        <FormLabel>Bio</FormLabel>
                        <Textarea focusBorderColor={focusBorderValue} name="bio" value={profileForm.bio} onChange={handleChange}></Textarea>
                        <FormHelperText>
                            'Slayer of 10,000 beasts' or 'Likes matcha' - whatever.

                        </FormHelperText>

                    </FormControl>

                    <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                        <FormLabel>Genres</FormLabel>
                        <CheckboxGroup colorScheme={'accent'} variant={'brand'} defaultValue={profileForm.genres} onChange={handleGenreChange}>
                            <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={2}>
                                {ALL_GENRES.map(genre => {
                                    return (
                                        <Checkbox key={genre} value={genre}>{genre.toUpperCase()}</Checkbox>

                                    )
                                })}

                            </Box>
                        </CheckboxGroup>
                        <FormHelperText>What are you interested in?</FormHelperText>

                    </FormControl>

                    <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                        <FormLabel>Other details</FormLabel>
                        <Textarea focusBorderColor={focusBorderValue} name="details" value={profileForm.details} onChange={handleChange}></Textarea>
                        <FormHelperText>
                            Go ahead. We're listening.

                        </FormHelperText>

                    </FormControl>

                    <Button type='submit'>Create my Profile</Button>
                </form>

            </Skeleton>


        </Box>
    )
}
import { ChangeEvent, FormEvent, useState } from "react";
import { IProfile } from "../shared-types";
import { createProfile } from "../utilities/auth-services";
import { Box, FormControl, FormLabel, FormHelperText, Button, CheckboxGroup, Stack, Checkbox, Textarea, Input, useColorModeValue, } from "@chakra-ui/react";
import { useNavigate } from "react-router";


interface Props {
    email: string;
}


export function SignUpForm({ email }: Props) {

    const defaultForm: IProfile = {
        id: email,
        displayName: "",
        roles: [],
        genres: [],
        bio: "",
        details: "",
    }

    const [profileForm, setProfileForm] = useState<IProfile>(defaultForm)

    const navigate = useNavigate()
    const borderValue = useColorModeValue('background.300', 'background.700')

    async function handleSubmit(evt: FormEvent) {

        evt.preventDefault()

        try {
            const profileResponse = await createProfile(profileForm)

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

    return (
        <Box m={4} p={12} display={'flex'} flexDirection={'column'}>
            <form onSubmit={handleSubmit}>
                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Display Name</FormLabel>
                    <Input name="displayName" value={profileForm.displayName} onChange={handleChange}></Input>
                    <FormHelperText>
                        How you'll be publicly identified - choose wisely, you can't change this.

                    </FormHelperText>

                </FormControl>


                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Are you...?</FormLabel>
                    <CheckboxGroup colorScheme={'accent'} variant={'brand'} defaultValue={profileForm.roles} onChange={handleRoleChange}>
                        <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={2}>
                        <Checkbox value='novelist'>A novelist</Checkbox>
                        <Checkbox value='video-game-dev'>A game developer</Checkbox>
                        <Checkbox value='screenwriter'>A screenwriter</Checkbox>
                        <Checkbox value='TTRPG-player'>A TTRPG Player</Checkbox>
                        <Checkbox value='TTRPG-DM'>A dungeon master</Checkbox>
                        <Checkbox value='fan-fiction'>A fan-fiction writer</Checkbox>
                        <Checkbox value='character-designer'>A character designer</Checkbox>
                        <Checkbox value='comic-book-writer'>A comic book writer</Checkbox>

                        </Box>
                        

                    </CheckboxGroup>
                    <FormHelperText>What do you do? Help us help you.</FormHelperText>

                </FormControl>

                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Bio</FormLabel>
                    <Textarea name="bio" value={profileForm.bio} onChange={handleChange}></Textarea>
                    <FormHelperText>
                        'Slayer of 10,000 beasts' or 'Likes matcha' - whatever.

                    </FormHelperText>

                </FormControl>

                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Genres</FormLabel>
                    <CheckboxGroup colorScheme={'accent'} variant={'brand'} defaultValue={profileForm.genres} onChange={handleGenreChange}>
                    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={2}>
                            <Checkbox value='science-fiction'>Science Fiction</Checkbox>
                            <Checkbox value='high-fantasy'>High Fantasy</Checkbox>
                            <Checkbox value='urban-fantasy'>Urban Fantasy</Checkbox>
                            <Checkbox value='supernatural'>Supernatural</Checkbox>
                            <Checkbox value='superhero'>Superhero</Checkbox>
                            <Checkbox value='dystopian'>Dystopian</Checkbox>
                            <Checkbox value='steampunk'>Steampunk</Checkbox>
                            <Checkbox value='cyberpunk'>Cyberpunk</Checkbox>
                            <Checkbox value='paranormal-romance'>Paranormal Romance</Checkbox>
                            <Checkbox value='mystery'>Mystery</Checkbox>
                            <Checkbox value='horror'>Horror</Checkbox>
                            <Checkbox value='adventure'>Adventure</Checkbox>

                        </Box>
                    </CheckboxGroup>
                    <FormHelperText>What are you interested in?</FormHelperText>

                </FormControl>

                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Other details</FormLabel>
                    <Textarea name="details" value={profileForm.details} onChange={handleChange}></Textarea>
                    <FormHelperText>
                        Go ahead. We're listening.

                    </FormHelperText>

                </FormControl>

                <Button type='submit'>Create my Profile</Button>
            </form>

        </Box>
    )
}
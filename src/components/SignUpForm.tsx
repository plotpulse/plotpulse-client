import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { IProfile } from "../shared-types";
import { createProfile } from "../utilities/auth-services";
import { Box, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Button, CheckboxGroup, Stack, Checkbox, Textarea, } from "@chakra-ui/react";

interface Props {
    email: string;
}


export function SignUpForm({ email }: Props) {

    const [profileForm, setProfileForm] = useState<IProfile>({
        id: email,
        handle: "",
        roles: [],
        genres: [],
        bio: "",
        details:"",
    })

    async function handleSubmit() {

        try {
            const profileResponse = await createProfile(profileForm)

            if (profileResponse.id === email) {
                // navigate("/profile")
                window.location.reload()
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

    function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = evt.target
        setProfileForm({ ...profileForm, [name]: value })


    }

    return (
        <Box>
            <form>
                <FormControl>
                    <FormLabel>Are you...?</FormLabel>
                    <CheckboxGroup defaultValue={profileForm.roles} onChange={handleRoleChange}>
                        <Checkbox value='novelist'>A novelist</Checkbox>
                        <Checkbox value='video-game-dev'>A game developer</Checkbox>
                        <Checkbox value='screenwriter'>A screenwriter</Checkbox>
                        <Checkbox value='TTRPG-player'>A TTRPG Player</Checkbox>
                        <Checkbox value='TTRPG-DM'>A dungeon master</Checkbox>
                        <Checkbox value='fan-fiction'>A fan-fiction writer</Checkbox>
                        <Checkbox value='character-designer'>A character designer</Checkbox>
                        <Checkbox value='comic-book-writer'>A comic book writer</Checkbox>

                    </CheckboxGroup>
                    <FormHelperText>What do you do? Help us help you.</FormHelperText>

                </FormControl>

                <FormControl>
                    <FormLabel>Bio</FormLabel>
                    <Textarea name="bio" value={profileForm.bio} onChange={handleChange}></Textarea>
                    <FormHelperText>
                        'Slayer of 10,000 beasts' or 'Likes matcha' - whatever.

                    </FormHelperText>

                </FormControl>

                <FormControl>
                    <FormLabel>Genres</FormLabel>
                    <CheckboxGroup defaultValue={profileForm.genres} onChange={handleGenreChange}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
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

                        </Stack>
                    </CheckboxGroup>
                    <FormHelperText>What are you interested in?</FormHelperText>

                </FormControl>

                <FormControl>
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
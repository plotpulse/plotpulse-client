import { useState, ChangeEvent, FormEvent } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import { createPrompt } from "../utilities/prompt-services"
import { useNavigate } from "react-router"
import { useColorModeValue, Heading, FormControl, FormLabel, Textarea, FormHelperText, Select, Button } from "@chakra-ui/react"
import { ALL_GENRES } from "../constants";


export function NewPromptForm() {

    const { user, getAccessTokenSilently } = useAuth0()
    const email = user?.email ? user.email : ""



    const defaultForm = {
        content: "",
        genres: new Array(2),

    }

    const [promptForm, setPromptForm] = useState(defaultForm)
    
    const navigate = useNavigate()
    const borderValue = useColorModeValue('background.300', 'background.700')
    const focusBorderValue = useColorModeValue('accent.300', 'accent.600')


    function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { name, value } = evt.target
        setPromptForm({ ...promptForm, [name]: value })


    }

    function handleSelectChange(evt: ChangeEvent<HTMLSelectElement>){
        const copyGenres = promptForm.genres

        copyGenres[Number(evt.target.name)] = evt.target.value
        setPromptForm({...promptForm, genres: copyGenres})
    }

    async function handleSubmit(evt: FormEvent) {

        evt.preventDefault()


        try {
            const promptResponse = await createPrompt(await getAccessTokenSilently(), {...promptForm, user: email})
            if (promptResponse) {
                setPromptForm(defaultForm)
                // should go to id of the prompt, but my current setup doesn't allow for that
                navigate(`/feed/${promptResponse.id}`)
            }else {
                throw new Error("There was an issue creating your prompt.")
            }

        } catch (error) {
            console.log(error)
            //do something in the UI
        }
    }

    return (
        <>
            <Heading m={4}>New Prompt</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Imagine</FormLabel>
                    <Textarea focusBorderColor={focusBorderValue} name="content" value={promptForm.content} onChange={handleChange} required></Textarea>
                    <FormHelperText>
                        Leave behind a breadcrumb of inspiration to help another writer.

                    </FormHelperText>
                </FormControl>

                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Genres</FormLabel>
                    <Select placeholder='Primary Genre' name='0' onChange={handleSelectChange} required focusBorderColor={focusBorderValue}>
                        {ALL_GENRES.map(genre => {
                            return (
                                <option key={genre} value={genre}>{genre.toUpperCase()}</option>
                            )
                        })}
                    </Select>
                    <Select placeholder='Secondary Genre' name='1' onChange={handleSelectChange}>
                        {ALL_GENRES.map(genre => {
                            return (
                                <option key={genre} value={genre}>{genre.toUpperCase()}</option>
                            )
                        })}
                    </Select>
                </FormControl>

                <Button type='submit'>Submit</Button>





            </form>

        </>
    )
}
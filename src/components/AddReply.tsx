import { Box, BoxProps, Button, FormControl, FormHelperText, FormLabel, Textarea, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";


interface AddReplyProps extends BoxProps {
    promptId: number;

}

export function AddReply({ promptId }: AddReplyProps) {

    const defaultForm = {
        response: '',

    }

    const [replyForm, setReplyForm] = useState(defaultForm)
    const borderValue = useColorModeValue('background.300', 'background.700')
    const focusBorderValue = useColorModeValue('accent.300', 'accent.600')


    async function handleSubmit(evt: FormEvent) {

        evt.preventDefault()

        try {

        } catch (error) {

        }

    }

    function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { name, value } = evt.target
        setReplyForm({ ...replyForm, [name]: value })


    }


    return (
        <Box>
            <form>
                <FormControl my={4} borderWidth={2} borderColor={borderValue} p={4}>
                    <FormLabel>Reply</FormLabel>
                    <Textarea focusBorderColor={focusBorderValue} name="response" value={replyForm.response} onChange={handleChange}></Textarea>
                    <FormHelperText>
                        Add a response

                    </FormHelperText>
                </FormControl>

                <Button type="submit">Submit</Button>



            </form>

        </Box>
    )




}

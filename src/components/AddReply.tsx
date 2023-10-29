import { Box, BoxProps, Button, Flex, FormControl, FormHelperText, FormLabel, Textarea, useColorModeValue, useDisclosure, } from "@chakra-ui/react";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { createReply } from "../utilities/reply-service";
import { useAuth0 } from "@auth0/auth0-react";


interface AddReplyProps extends BoxProps {
    promptId: number;
    submitted: number;
    setSubmitted: Dispatch<SetStateAction<number>>;

}

export function AddReply({ promptId, submitted, setSubmitted }: AddReplyProps) {

    const defaultForm = {
        response: '',

    }

    const { user, getAccessTokenSilently } = useAuth0()
    const email = user ? user.email : ""
    

    const [replyForm, setReplyForm] = useState(defaultForm)
    const borderValue = useColorModeValue('background.300', 'background.700')
    const focusBorderValue = useColorModeValue('accent.300', 'accent.600')
    const { getButtonProps, getDisclosureProps } = useDisclosure()

    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()



    async function handleSubmit(evt: FormEvent) {

        evt.preventDefault()

        try {
            const replyResponse = await createReply( await getAccessTokenSilently(), promptId, {...replyForm, user: email})

            if (replyResponse){
                console.log(replyResponse)
                setReplyForm(defaultForm)
                setSubmitted(submitted + 1)
            }

        } catch (error) {

        }

    }

    function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { name, value } = evt.target
        setReplyForm({ ...replyForm, [name]: value })


    }


    return (
        <Flex direction={"column"}>
            <Button {...buttonProps}>
                {disclosureProps.hidden ? "Add a Reply" : "Close"}
            </Button>
            <Box {...disclosureProps}>
                <form onSubmit={handleSubmit}>
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
        </Flex>
    )





}

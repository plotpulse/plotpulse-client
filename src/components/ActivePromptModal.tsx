import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, ModalProps } from "@chakra-ui/react";
import { IProfile, IPrompt } from "../shared-types";
import { getPrompt } from "../utilities/prompt-services";
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from "react";
import { AddReply } from ".";


interface ActivePromptModalProps extends ModalProps {
    activePromptId: number | null;
}



export function ActivePromptModal({ activePromptId, isOpen, onClose }: ActivePromptModalProps) {
    const { user, getAccessTokenSilently } = useAuth0()
    const [prompt, setPrompt] = useState<IPrompt | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleFetchPrompt() {
        if (!activePromptId) return

        try {
            const promptResponse = await getPrompt(await getAccessTokenSilently(), activePromptId)

            if (promptResponse) {
                setPrompt(promptResponse)
                setIsLoading(false)

            }

        } catch (error) {

        }
    }

    useEffect(() => { handleFetchPrompt() }, [isLoading])

    function loaded() {
        if (!prompt) return

        return (
            <>
                {prompt.content}
                <AddReply promptId={prompt.id}/>

                {prompt.replies?.map(reply => {
                    return (
                        <p>{reply.response}</p>
                    )
                })}
            </>


        )
    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay />
            <ModalContent mx={40}>
                <ModalCloseButton />


                <ModalHeader>
                    Prompt itself will go here
                </ModalHeader>

                <ModalBody>

                    {/* <ExpandedPrompt/>
                    <RepliesDisplay/> */}
                    {isLoading ? <p>Loading...</p> : loaded()}


                </ModalBody>

            </ModalContent>

        </Modal>
    )
}
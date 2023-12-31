import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, ModalProps, useColorModeValue, Skeleton } from "@chakra-ui/react";
import { IPrompt } from "../shared-types";
import { getPrompt } from "../utilities/prompt-services";
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from "react";
import { AddReply, ModalPrompt, RepliesDisplay } from ".";


interface ActivePromptModalProps extends ModalProps {
    activePromptId: number | null;
}



export function ActivePromptModal({ activePromptId, isOpen, onClose }: ActivePromptModalProps) {
    const { getAccessTokenSilently } = useAuth0()
    const [prompt, setPrompt] = useState<IPrompt | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [submitted, setSubmitted] = useState(0)
    const bgValue = useColorModeValue('background.500', 'background.600')

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

    useEffect(() => { handleFetchPrompt() }, [isLoading, activePromptId])


    return (
        <Modal isOpen={isOpen} onClose={onClose} size='6xl' scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader minH={'3.25rem'} bg={bgValue}>

                </ModalHeader>

                <ModalBody p={4}>
                    <Skeleton isLoaded={!isLoading}>
                        {prompt ?

                            <>

                                <ModalPrompt prompt={prompt} />
                                <AddReply promptId={prompt.id} submitted={submitted} setSubmitted={setSubmitted} />
                                <RepliesDisplay promptId={prompt.id} submitted={submitted} />

                            </>
                            :
                            <></>
                        }
                    </Skeleton>
                </ModalBody>

                <ModalFooter minH={'3.25rem'} bg={bgValue}>

                </ModalFooter>

            </ModalContent>

        </Modal>
    )
}
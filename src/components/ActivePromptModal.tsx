import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, ModalProps } from "@chakra-ui/react";
import { IProfile, IPrompt } from "../shared-types";

interface ActivePromptModalProps extends ModalProps {
    activePromptId: number | null;
}



export function ActivePromptModal({ activePromptId, isOpen, onClose }: ActivePromptModalProps) {






    return (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay />
            <ModalContent mx={40}>
                <ModalCloseButton />


                <ModalHeader>
                    Prompt itself will go here
                </ModalHeader>

                <ModalBody>
                    {/* {prompt.content} */}
                    {/* <ExpandedPrompt/>
                    <AddReply/>
                    <RepliesDisplay/> */}
                    {/* {prompt.replies?.map(reply => {
                        return (
                            <p>{reply.response}</p>
                        )
                    })} */}

                </ModalBody>

            </ModalContent>

        </Modal>
    )
}
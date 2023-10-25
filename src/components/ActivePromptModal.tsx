import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter, ModalProps } from "@chakra-ui/react";
import { IProfile, IPrompt } from "../shared-types";

interface ActivePromptModalProps extends ModalProps {
    activePromptId: number | null;
}

const user: IProfile = {
    id: "matthewbuiltthat@gmail.com",
    displayName: "immortal_gift"
}

export function ActivePromptModal({ activePromptId, isOpen, onClose }: ActivePromptModalProps) {


    const prompt: IPrompt = {
        id: (activePromptId ?? 0) + 223,
        content: "Trapped in a realm where magic is feared and forbidden, a young mage must conceal their abilities while embarking on a quest to save their kingdom.",
        user: user,
        stars: [],
        replies: [
            {
                id: 33432,
                response: "Yaaaaaaaaaaaaaaa dsaidhsadih da ububdasiudbub oiuasdouasdioujeoinuidua jidaisojd uheuiha nbabdsai bsduiabd. Iuabsiubdiudiuab iuwoapw ,enmenajkskjnfa poekpe,als eueueh uebeeue akjsdajheu. Bekabkbejkebj ayiegbaskjsr ubgosdjowp da ha ash. Hah absasiudibas aoshdoiasd ohasdoiroie rhejhiuqoh ewiuh ihwei u heihi hi iwheiwh h iwheiwheuiehiw as,,d,a",
                prompt: {
                    id: (activePromptId ?? 0) + 223,
                },
                user: user

            },
            {
                id: 12722,
                response: "Yaaaaaaaaaaaaaaa dsaidhsadih da ububdasiudbub oiuasdouasdioujeoinuidua jidaisojd uheuiha nbabdsai bsduiabd. Iuabsiubdiudiuab iuwoapw ,enmenajkskjnfa poekpe,als eueueh uebeeue akjsdajheu. Bekabkbejkebj ayiegbaskjsr ubgosdjowp da ha ash. Hah absasiudibas aoshdoiasd ohasdoiroie rhejhiuqoh ewiuh ihwei u heihi hi iwheiwh h iwheiwheuiehiw as,,d,a",
                prompt: {
                    id: (activePromptId ?? 0) + 223,
                },
                user: user

            },
            {
                id: 63143,
                response: "Yaaaaaaaaaaaaaaa dsaidhsadih da ububdasiudbub oiuasdouasdioujeoinuidua jidaisojd uheuiha nbabdsai bsduiabd. Iuabsiubdiudiuab iuwoapw ,enmenajkskjnfa poekpe,als eueueh uebeeue akjsdajheu. Bekabkbejkebj ayiegbaskjsr ubgosdjowp da ha ash. Hah absasiudibas aoshdoiasd ohasdoiroie rhejhiuqoh ewiuh ihwei u heihi hi iwheiwh h iwheiwheuiehiw as,,d,a",
                prompt: {
                    id: (activePromptId ?? 0) + 223,
                },
                user: user

            },
            {
                id: 65234,
                response: "Yaaaaaaaaaaaaaaa dsaidhsadih da ububdasiudbub oiuasdouasdioujeoinuidua jidaisojd uheuiha nbabdsai bsduiabd. Iuabsiubdiudiuab iuwoapw ,enmenajkskjnfa poekpe,als eueueh uebeeue akjsdajheu. Bekabkbejkebj ayiegbaskjsr ubgosdjowp da ha ash. Hah absasiudibas aoshdoiasd ohasdoiroie rhejhiuqoh ewiuh ihwei u heihi hi iwheiwh h iwheiwheuiehiw as,,d,a",
                prompt: {
                    id: (activePromptId ?? 0) + 223,
                },
                user: user

            },
        ],
        genres: ['fantasy', 'romance'],

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
                    {prompt.content}
                    {/* <ExpandedPrompt/>
                    <AddReply/>
                    <RepliesDisplay/> */}
                    {prompt.replies?.map(reply => {
                        return (
                            <p>{reply.response}</p>
                        )
                    })}
                                                                                  
                
                </ModalBody>

                <ModalFooter>
                    ????
                </ModalFooter>

            </ModalContent>

        </Modal>
    )
}
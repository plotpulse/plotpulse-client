import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, DrawerProps } from "@chakra-ui/react";

interface ActivePromptDrawerProps extends DrawerProps {
    activePrompt: number | null;
}

export function ActivePromptDrawer({activePrompt, isOpen, onClose}: ActivePromptDrawerProps){

    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" size='full'>
                <DrawerOverlay/>
                <DrawerContent>
                <DrawerCloseButton/>


                <DrawerHeader>
                    Prompt itself will go here
                </DrawerHeader>

                <DrawerBody>
                    Reply to it
                    Replies go here
                </DrawerBody>

                <DrawerFooter>
                    ????
                </DrawerFooter>

                </DrawerContent>

            </Drawer>
    )
}
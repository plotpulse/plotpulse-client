import { IPrompt } from "../shared-types";
import { Stack, StackProps, useColorModeValue } from "@chakra-ui/react";
import { forwardRef, ForwardedRef, } from "react";
import { PromptCard } from ".";
import { useAuth0 } from "@auth0/auth0-react";

interface TimeLineProps extends StackProps {
    prompts: IPrompt[] | null;
    updateActive: (id: number) => void;
    
}



export const Timeline = forwardRef((props: TimeLineProps, ref: ForwardedRef<HTMLDivElement>) => {
    const borderValue = useColorModeValue('background.100','background.800')
    const { user } = useAuth0()
    const { prompts, updateActive } = props;
    

    const cards = prompts?.map(prompt => {
        return (
            <PromptCard key={prompt.id} prompt={prompt} updateActive={updateActive} auth0User={user}/>
        )
    })

    return (
        <Stack ref={ref} p={2} borderLeftWidth={3} borderRightWidth={3} borderColor={borderValue} paddingBottom={24} spacing={4} overflow={'scroll'} maxH={'80vh'} boxShadow={"lg"}>
            {cards}

        </Stack>
    )

})


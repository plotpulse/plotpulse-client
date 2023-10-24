import { IPrompt } from "../shared-types";
import { Stack, StackProps, useColorModeValue } from "@chakra-ui/react";
import { forwardRef, ForwardedRef, } from "react";
import { PromptCard } from ".";

interface TimeLineProps extends StackProps {
    prompts: IPrompt[] | null;
    
}



export const Timeline = forwardRef((props: TimeLineProps, ref: ForwardedRef<HTMLDivElement>) => {
    const borderValue = useColorModeValue('background.100','background.800')
    const { prompts } = props;

    const cards = prompts?.map(prompt => {
        return (
            <PromptCard key={prompt.id} prompt={prompt} />
        )
    })

    return (
        <Stack ref={ref} p={2} borderLeftWidth={3} borderRightWidth={3} borderColor={borderValue} paddingBottom={24} spacing={4} overflow={'scroll'} maxH={'80vh'} boxShadow={"lg"}>
            {cards}

        </Stack>
    )

})




// export function Timeline({ prompts, ref }: TimeLineProps) {

    
// }
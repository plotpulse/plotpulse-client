import { IPrompt } from "../shared-types";
import { Stack, StackProps } from "@chakra-ui/react";
import { forwardRef, ForwardedRef, } from "react";
import { PromptCard } from ".";

interface TimeLineProps extends StackProps {
    prompts: IPrompt[] | null;
    
}


export const Timeline = forwardRef((props: TimeLineProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { prompts } = props;

    const cards = prompts?.map(prompt => {
        return (
            <PromptCard key={prompt.id} prompt={prompt} />
        )
    })

    return (
        <Stack ref={ref} p={4} paddingBottom={24} spacing={4} overflow={'scroll'} maxH={'80vh'}>
            {cards}

        </Stack>
    )

})




// export function Timeline({ prompts, ref }: TimeLineProps) {

    
// }
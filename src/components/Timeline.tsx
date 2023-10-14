import { IPrompt } from "../shared-types";

interface TimeLineProps {
    prompts: IPrompt[] | null;
}


export function Timeline({prompts}: TimeLineProps){

    const cards = prompts?.map(prompt => {
        return (
        <p key={prompt.id}>{prompt.content}</p>
        )
    })

    return (
        <>
        {cards}
        
        </>
    )
}
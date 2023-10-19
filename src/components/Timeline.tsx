import { IPrompt } from "../shared-types";

import { Text, Card, CardHeader, CardBody, CardFooter, HStack, Button, Box, VStack, Stack, SimpleGrid, IconButton, BoxProps, StackProps } from "@chakra-ui/react";

import { AddIcon, StarIcon } from '@chakra-ui/icons'
import { MutableRefObject, RefObject, PropsWithRef, useState, LegacyRef, forwardRef, ForwardedRef } from "react";

interface TimeLineProps extends StackProps {
    prompts: IPrompt[] | null;
    
}

interface PromptCardProps {
    prompt: IPrompt;
}

function PromptCard({ prompt }: PromptCardProps) {
    const { id, content, user, stars, replies, } = prompt
    const [lineValue, setLineValue ] = useState(6)

    function handleExpand(){
        if (lineValue === 6){
            setLineValue(100)
            return
        }
        setLineValue(6)
    }


    return (
        <Card variant={"main"} mx={4}>
            <CardHeader>#{id} from @{user.displayName}</CardHeader>
            <CardBody>
                <Text onClick={handleExpand} noOfLines={lineValue}>{content}</Text>
            </CardBody>
            <CardFooter>
                <HStack spacing={12}>
                    <HStack>
                        <Text>{replies?.length}</Text>
                        <AddIcon/>
                    </HStack>

                    <HStack>
                        <Text>{stars?.length}</Text>
                        <StarIcon
                        
                        fill={"red"}/>
                    </HStack>
                </HStack>
            </CardFooter>
        </Card>

    )
}


export const Timeline = forwardRef((props: TimeLineProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { prompts } = props;
    const cards = prompts?.map(prompt => {
        return (
            <PromptCard key={prompt.id} prompt={prompt} />
        )
    })
    console.log('ref in TL', ref)

    return (
        <Stack ref={ref} p={{sm: 4, md: 12}} spacing={4} overflow={'scroll'} maxH={'100vh'}>
            {cards}

        </Stack>
    )

})




// export function Timeline({ prompts, ref }: TimeLineProps) {

    
// }
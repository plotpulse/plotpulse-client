import { IPrompt } from "../shared-types";

import { Text, Card, CardHeader, CardBody, CardFooter, HStack, Button, Box, VStack, Stack, SimpleGrid } from "@chakra-ui/react";

import { AddIcon, StarIcon } from '@chakra-ui/icons'
import { useState } from "react";

interface TimeLineProps {
    prompts: IPrompt[] | null;
}

interface PromptCardProps {
    prompt: IPrompt;
}

function PromptCard({ prompt }: PromptCardProps) {
    const { id, content, user, likes, replies, } = prompt
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
            <CardHeader>#{id} from @{user.handle}</CardHeader>
            <CardBody>
                <Text onClick={handleExpand} noOfLines={lineValue}>{content}</Text>
            </CardBody>
            <CardFooter>
                <HStack>
                    <HStack>
                        <Text>{replies?.length}</Text>
                        <Button leftIcon={<AddIcon/>}>Reply</Button>
                    </HStack>

                    <HStack>
                        <Text>{likes?.length}</Text>
                        <Button leftIcon={<StarIcon/>}>Like</Button>
                    </HStack>
                </HStack>
            </CardFooter>
        </Card>

    )
}



export function Timeline({ prompts }: TimeLineProps) {

    const cards = prompts?.map(prompt => {
        return (
            <PromptCard key={prompt.id} prompt={prompt} />
        )
    })

    return (
        <Stack p={{sm: 4, md: 12}} spacing={4} >
            {cards}

        </Stack>
    )
}
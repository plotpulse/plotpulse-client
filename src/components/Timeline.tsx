import { IPrompt } from "../shared-types";

import { Text, Card, CardHeader, CardBody, CardFooter, HStack, Button, Box, VStack } from "@chakra-ui/react";

import { AddIcon, StarIcon } from '@chakra-ui/icons'

interface TimeLineProps {
    prompts: IPrompt[] | null;
}

interface PromptCardProps {
    prompt: IPrompt;
}

function PromptCard({ prompt }: PromptCardProps) {
    const { id, content, user, likes, replies, } = prompt


    return (
        <Card>
            <CardHeader>#{id} from @{user.id}</CardHeader>
            <CardBody>
                <Text>{content}</Text>
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
        <>
            {cards}

        </>
    )
}
import { Card, CardHeader, CardBody, CardFooter, HStack, Text, Badge, useColorModeValue } from "@chakra-ui/react";
import { IPrompt } from "../shared-types";
import { AddIcon, StarIcon } from '@chakra-ui/icons'

interface PromptCardProps {
    prompt: IPrompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
    const { content, user, stars, replies, genres } = prompt
    const badgeBGValue = useColorModeValue('accent.100', 'accent.700')

    return (
        <Card variant={"main"} mx={4}>
            <CardHeader>
                @{user.displayName}
                {genres.map((genre, idx) => {
                    return (
                        <Badge bgColor={badgeBGValue} borderRadius={"md"} key={idx} mx={2} p={1}>{genre}</Badge>

                    )
                })}
            </CardHeader>
            <CardBody>
                <Text>{content}</Text>
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
                        
                        color={"red"}/>
                    </HStack>
                </HStack>
            </CardFooter>
        </Card>

    )
}
import { Card, CardHeader, CardBody, CardFooter, HStack, Text, Badge, useColorModeValue, Button, Box } from "@chakra-ui/react";
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
            <CardHeader display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Box>
                @{user.displayName}
                {genres.map((genre, idx) => {
                    return (
                        <Badge bgColor={badgeBGValue} borderRadius={"md"} key={idx} mx={2} p={1}>{genre}</Badge>

                    )
                })}

                </Box>
                <Box>
                    <Button>Star</Button>


                </Box>
            </CardHeader>
            <CardBody>
                <Text>{content}</Text>
            </CardBody>
            <CardFooter display={'flex'} flexDirection={'column'}>
                    <Button> {replies?.length} Replies</Button>

                
                
            </CardFooter>
        </Card>

    )
}
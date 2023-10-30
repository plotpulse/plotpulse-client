import { Card, CardHeader, CardBody, CardFooter, HStack, Text, Badge, useColorModeValue, Button, Box, Grid, GridItem } from "@chakra-ui/react";
import { IPrompt } from "../shared-types";
import { AddIcon, StarIcon, ChatIcon } from '@chakra-ui/icons'

import { StarButton } from ".";

interface PromptCardProps {
    prompt: IPrompt;
}

export function PromptCard({ prompt }: PromptCardProps) {

    const { id, content, user, stars, replies, genres } = prompt
    const badgeBGValue = useColorModeValue('accent.100', 'accent.700')

    return (
        <Card variant={"main"} mx={4}
            _hover={{ scale: 1.1 }}>
            <CardHeader display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Box>
                    @{user?.displayName}
                    {genres.map((genre, idx) => {
                        return (
                            <Badge bgColor={badgeBGValue} borderRadius={"md"} key={idx} mx={2} p={1}>{genre}</Badge>

                        )
                    })}

                </Box>





            </CardHeader>
            <CardBody>
                <Grid templateColumns={'repeat(12, 1fr)'} gap={2}>
                    <GridItem colSpan={10}>
                        <Text>{content}</Text>

                    </GridItem>
                    <GridItem colSpan={2}>
                        <StarButton promptId={id} my={2}/>
                        <Button rightIcon={<ChatIcon/>} my={2}> {replies?.length ?? 0}</Button>

                    </GridItem>
                </Grid>

            </CardBody>
            <CardFooter display={'flex'} flexDirection={'column'}>
                



            </CardFooter>
        </Card>

    )
}
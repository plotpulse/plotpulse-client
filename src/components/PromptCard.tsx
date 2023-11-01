import { Card, CardHeader, CardBody, CardFooter, Text, Badge, useColorModeValue, Box, Grid, GridItem } from "@chakra-ui/react";
import { IPrompt } from "../shared-types";
import { StarButton, ViewRepliesButton } from ".";

interface PromptCardProps {
    prompt: IPrompt;
    updateActive: (id: number) => void;
}

export function PromptCard({ prompt, updateActive }: PromptCardProps) {

    const { id, content, user, genres } = prompt
    const badgeBGValue = useColorModeValue('accent.100', 'accent.700')

    return (
        <Card variant={"prompt"} mx={4}
            _hover={{ scale: 1.1 }}>
            <CardHeader display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Box>
                    @{user?.displayName}
                    
                </Box>

            </CardHeader>
            <CardBody>
                <Grid templateColumns={'repeat(12, 1fr)'} gap={2}>
                    <GridItem colSpan={10}>
                        <Text>{content}</Text>

                    </GridItem>
                    <GridItem colSpan={2} display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                    {genres.map((genre, idx) => {
                        return (
                            <Badge bgColor={badgeBGValue} borderRadius={"md"} key={idx} p={2}>{genre}</Badge>
                        )
                    })}


                    </GridItem>
                </Grid>

            </CardBody>
            <CardFooter display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <StarButton promptId={id} mx={2} w={'7rem'} />
                <ViewRepliesButton promptId={id} updateActive={updateActive} mx={2} w={'7rem'}></ViewRepliesButton>

            </CardFooter>
        </Card>

    )
}
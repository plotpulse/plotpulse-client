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
                        <ViewRepliesButton promptId={id} updateActive={updateActive} my={2} ></ViewRepliesButton>

                    </GridItem>
                </Grid>

            </CardBody>
            <CardFooter display={'flex'} flexDirection={'column'}>

            </CardFooter>
        </Card>

    )
}
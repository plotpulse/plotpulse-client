import { Card, CardHeader, CardBody, CardFooter, Text, Badge, useColorModeValue, Box,} from "@chakra-ui/react";
import { IPrompt } from "../shared-types";
import { StarButton, ViewRepliesButton } from ".";

interface PromptCardProps {
    prompt: IPrompt;
    updateActive: (id: number) => void;
}

export function PromptCard({ prompt, updateActive }: PromptCardProps) {

    const { id, content, user, genres, created } = prompt
    const date = new Date(created)
    console.log(prompt)
    const badgeBGValue = useColorModeValue('accent.100', 'accent.700')

    return (
        <Card variant={"prompt"} mx={4}
        >
            <CardHeader >
                <Box display={'flex'} flexWrap={'wrap'} flexDirection={'row'} justifyContent={'space-between'} my={2}>
                    <Box>
                        @{user?.displayName}

                    </Box>
                    <Box>
                        {date.toLocaleDateString()}

                    </Box>


                </Box>

                <Box display={'flex'} flexWrap={'wrap'} flexDirection={'row'} justifyContent={'flex-end'} gap={4} my={2}>
                        {genres.map((genre, idx) => {
                            return (
                                <Badge bgColor={badgeBGValue} borderRadius={"md"} key={idx} p={2}>{genre}</Badge>
                            )
                        })}


                    </Box>


            </CardHeader>
            <CardBody>

            <Text >{content}</Text>

                

            </CardBody>
            <CardFooter display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <StarButton promptId={id} mx={2} w={'7rem'} />
                <ViewRepliesButton promptId={id} updateActive={updateActive} mx={2} w={'7rem'}></ViewRepliesButton>

            </CardFooter>
        </Card>

    )
}
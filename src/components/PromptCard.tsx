import { Card, CardHeader, CardBody, CardFooter, HStack, Text, Badge } from "@chakra-ui/react";
import { useState } from "react";
import { IPrompt } from "../shared-types";
import { AddIcon, StarIcon } from '@chakra-ui/icons'

interface PromptCardProps {
    prompt: IPrompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
    const { id, content, user, stars, replies, genres } = prompt
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
            <CardHeader>
                @{user.displayName}
                {genres.map((genre, idx) => {
                    return (
                        <Badge key={idx} mx={2}>{genre}</Badge>

                    )
                })}
            </CardHeader>
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
                        
                        color={"red"}/>
                    </HStack>
                </HStack>
            </CardFooter>
        </Card>

    )
}
import { Heading, Box, Text, BoxProps, useDisclosure, Card, CardBody, CardHeader, CardFooter, CardProps } from "@chakra-ui/react";
import { IReply } from "../shared-types";

interface ReplyCardProps extends CardProps {
    reply: IReply;
}


export function ReplyCard({ reply }: ReplyCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Card variant={'reply'} my={2}>
            <CardHeader>
                <Heading size={'xs'}>@{reply.user.displayName}</Heading>

            </CardHeader>
            <CardBody>
            <Text noOfLines={isOpen ? 99 : 8} onClick={() => isOpen ? onClose() : onOpen()}>{reply.response}</Text>

            </CardBody>
            <CardFooter>

            </CardFooter>




            
        </Card>
    )
}
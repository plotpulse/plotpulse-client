import { Heading, Text, useDisclosure, Card, CardBody, CardHeader, CardFooter, CardProps, useColorModeValue } from "@chakra-ui/react";
import { IReply } from "../shared-types";

interface ReplyCardProps extends CardProps {
    reply: IReply;
}


export function ReplyCard({ reply }: ReplyCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bgValue = useColorModeValue('accent.100', 'accent.800')
    

    return (
        <Card variant={'reply'} my={2}>
            <CardHeader>
                <Heading size={'xs'}>@{reply.user.displayName}</Heading>

            </CardHeader>
            <CardBody>
            <Text borderRadius={'md'} _hover={{ bg: bgValue}} noOfLines={isOpen ? 99 : 8} onClick={() => isOpen ? onClose() : onOpen()} p={4}>{reply.response}</Text>

            </CardBody>
            <CardFooter>

            </CardFooter>




            
        </Card>
    )
}
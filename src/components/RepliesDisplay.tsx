import { BoxProps, Box, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getReplies } from "../utilities/reply-service";
import { IReply } from "../shared-types";


interface RepliesDisplayProps extends BoxProps {
    promptId: number;
    submitted: number;
}

export function RepliesDisplay({ promptId, submitted }: RepliesDisplayProps) {
    const { getAccessTokenSilently } = useAuth0()
    const [replies, setReplies] = useState<IReply[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleFetchReplies() {
        console.log(submitted)

        try {
            setIsLoading(true)
            const repliesResponse = await getReplies(await getAccessTokenSilently(), promptId)
            if (repliesResponse) {
                setReplies(repliesResponse)
                setIsLoading(false)
            } else {
                throw new Error('Unable to retrieve replies')
            }

        } catch (error) {
            console.log(error)
            // something in the UI

        }
    }

    function loaded() {
        if (!replies) return

        const replyElements = replies?.map(reply => {
            return (
                <Box key={reply.id}>
                    <Heading size={'xs'}>@{reply.user.displayName}</Heading>
                    <Text>{reply.response}</Text>
                </Box>
            )
        })

        return (
            <>
                {replyElements}
            </>
        )
    }

    useEffect(() => { handleFetchReplies() }, [submitted])

    return (
        <Box>
            {isLoading ? <p>Loading...</p> : loaded()}

        </Box>
    )

}
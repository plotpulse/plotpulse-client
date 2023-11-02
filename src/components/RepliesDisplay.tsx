import { BoxProps, Box, Skeleton, } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getReplies } from "../utilities/reply-service";
import { IReply } from "../shared-types";
import { ReplyCard } from "./ReplyCard";


interface RepliesDisplayProps extends BoxProps {
    promptId: number;
    submitted: number;
}

export function RepliesDisplay({ promptId, submitted }: RepliesDisplayProps) {
    const { getAccessTokenSilently } = useAuth0()
    const [replies, setReplies] = useState<IReply[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleFetchReplies() {

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

    const replyElements = replies?.map(reply => {
        return (
            <ReplyCard key={reply.id} reply={reply} />
        )
    })


    useEffect(() => { handleFetchReplies() }, [submitted])

    return (
        <Box p={4} my={2}>
            <Skeleton isLoaded={!isLoading}>
                {replyElements}
            </Skeleton>
        </Box>
    )

}
import { Button, ButtonProps } from "@chakra-ui/react";
import { IReply } from "../shared-types";
import { useEffect, useState } from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { getReplies } from "../utilities/reply-service";

interface ViewRepliesButtonProps extends ButtonProps {
    promptId: number;
    updateActive: (id: number) => void;

}

export function ViewRepliesButton({promptId, updateActive, ...otherProps}: ViewRepliesButtonProps){

    const [ isLoading, setIsLoading ] = useState(true)
    const [ hasReplied, setHasReplied ] = useState(false)
    const [ replies, setReplies ] = useState<IReply[] | null>(null)
    const { user, getAccessTokenSilently } = useAuth0()
    const email = user ? user.email : ""

    async function handleFetchReplies(){

        try {
            const repliesResponse = await getReplies(await getAccessTokenSilently(), promptId)
            if (repliesResponse) {
                setReplies(repliesResponse)
                setIsLoading(false)
            } else {
                throw new Error('Unable to retrieve stars')
            }

        } catch (error) {
            console.log(error)
            // something in the UI

        }
    }

    useEffect(() => { handleFetchReplies() }, [isLoading])
    useEffect(() => { checkReplied() }, [replies])


    function userReplied(){

        if (replies === null) return false
        for (let i = 0; i < replies.length; i++){
            if (replies[i].user?.id === user?.email){
                return true
            }
        }
        return false
    }

    function checkReplied(){
        setHasReplied(userReplied())
    }

   

    function loaded(){

        return (
            <Button {...otherProps} rightIcon={<ChatIcon color={hasReplied ? 'accent.400' : 'gray.400'} />} onClick={() => updateActive(promptId)}>{replies?.length}</Button>
        )
    }

    return (
        <>
        {isLoading ? <></>: loaded()}
        </>
    )

    

}
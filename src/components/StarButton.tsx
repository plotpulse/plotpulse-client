import { Button, ButtonProps } from "@chakra-ui/react";
import { IStar } from "../shared-types";
import { useEffect, useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { createStar, deleteStar, getAllStars } from "../utilities/star-service";

interface StarButtonProps extends ButtonProps {
    promptId: number;
}

export function StarButton({promptId, ...otherProps}: StarButtonProps){

    const [ isLoading, setIsLoading ] = useState(true)
    const [ isStarred, setIsStarred ] = useState(false)
    const [ stars, setStars ] = useState<IStar[] | null>(null)
    const [ userStarredId, setUserStarredId] = useState(0)
    const { user, getAccessTokenSilently } = useAuth0()
    const email = user ? user.email : ""

    async function handleFetchStars(){

        try {
            const starsResponse = await getAllStars(await getAccessTokenSilently(), promptId)
            if (starsResponse) {
                setStars(starsResponse)
                setIsLoading(false)
            } else {
                throw new Error('Unable to retrieve stars')
            }

        } catch (error) {
            console.log(error)
            // something in the UI

        }
    }

    useEffect(() => { handleFetchStars() }, [isLoading])
    useEffect(() => { checkStarred() }, [stars])

    console.log(`prompt number ${promptId} has ${stars?.length} stars`, stars)

    function userStarred(){

        if (stars === null) return false
        for (let i = 0; i < stars.length; i++){
            if (stars[i].user?.id === user?.email && stars[i]?.prompt?.id === promptId){
                setUserStarredId(stars[i].id)
                return true
            }
        }
        return false

    }

    function checkStarred(){
        setIsStarred(userStarred())
    }

    async function handleButtonClick(){
        
        try {
            
            const newStar = {
                userId: email,
                promptId: promptId
            }
            
            const starResponse = isStarred ? await deleteStar(await getAccessTokenSilently(), promptId, userStarredId) : await createStar(await getAccessTokenSilently(), promptId, newStar)
            if (starResponse){
                setIsLoading(true)
            }
            
        } catch (error) {
            
        }
    }

    function loaded(){

        return (
            <Button {...otherProps} rightIcon={<StarIcon color={isStarred ? 'accent.400' : 'gray.400'} />} onClick={handleButtonClick}>{stars?.length}</Button>
        )
    }

    return (
        <>
        {isLoading ? <></>: loaded()}
        </>
    )

    

}
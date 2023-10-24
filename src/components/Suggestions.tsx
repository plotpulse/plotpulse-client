import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IProfile, IPrompt } from "../shared-types";
import { getProfile, } from "../utilities/auth-services";
import { Text } from "@chakra-ui/react";

interface SuggestionsProps extends BoxProps {
    prompts: IPrompt[] | null
}



export function Suggestions({prompts}: SuggestionsProps) {

    // REFACTOR to state management
    const { user, getAccessTokenSilently } = useAuth0()
    const [profile, setProfile] = useState<IProfile | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const borderValue = useColorModeValue('background.100', 'background.800')

    const email = user?.email ?? ""

    async function handleFetchProfile() {

        try {
            const response = await getProfile(await getAccessTokenSilently(), email)

            if (response?.id === email) {
                setProfile(response)
            } else {
                throw new Error("There was an issue loading your associated profile.")
            }

        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false)
        }

    }

    function loaded() {
        console.log(prompts)
        const suggestions = profile?.genres.map(genre => {
            const filtered = prompts?.filter(prompt => {
                
                return prompt.genres.includes(genre)
            })
            console.log(filtered)
        
            const suggested = filtered[Math.floor(Math.random() * filtered.length)]
            
            
            return (
                <p key={suggested?.id}>{suggested?.id}</p>
            )
        })

        console.log(suggestions)

        return (
            <>
                <Box mx={2} borderRightWidth={3} borderColor={borderValue} h={'80vh'} display={'flex'} flexDirection={"column"} p={4} gap={2}>
                    {suggestions}

                </Box>

            </>
        )
    }

    useEffect(() => { handleFetchProfile() }, [isLoading])



    return (
        <>
        {isLoading ? <p>Loading...</p> : loaded()}
        
        </>
    )

}
import { Box, BoxProps, Button, Divider, useColorModeValue, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IProfile, IPrompt } from "../shared-types";
import { getProfile, } from "../utilities/auth-services";

interface SuggestionsProps extends BoxProps {
    prompts: IPrompt[] | null;
    updateActive: (id: number) => void;
}



export function Suggestions({prompts, updateActive}: SuggestionsProps) {

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
        const suggestions = profile?.genres?.map(genre => {
            const filtered = prompts?.filter(prompt => {
                
                return prompt.genres.includes(genre)
            })

            if (!filtered || !filtered[0]) return
        
            const suggested = filtered[Math.floor(Math.random() * filtered.length)]
            
            
            return (
                
                    <Button key={suggested?.id} variant={'outline'} colorScheme="accent" size={['xs', null, 'sm']} onClick={() => updateActive(suggested?.id)}>#{suggested?.id} - {genre.toUpperCase()}</Button>

                    
            )
        })


        return (
            <>
                <Box mx={2} borderRightWidth={3} borderColor={borderValue} h={'80vh'} display={'flex'} flexDirection={"column"} p={4} gap={2}>
                   <Heading size={['xs', null, 'sm']}>Suggstions for you:</Heading>
                   <Divider></Divider>
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
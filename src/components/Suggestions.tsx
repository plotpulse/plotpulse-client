import { Box, BoxProps, Button, Divider, useColorModeValue, Heading, Text, Skeleton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IProfile, IPrompt } from "../shared-types";
import { getProfile, } from "../utilities/auth-services";

interface SuggestionsProps extends BoxProps {
    prompts: IPrompt[] | null;
    updateActive: (id: number) => void;
}


export function Suggestions({ prompts, updateActive }: SuggestionsProps) {
    // REFACTOR to state management
    const { user, getAccessTokenSilently } = useAuth0()
    const [profile, setProfile] = useState<IProfile | null>(null)
    const [ profError, setProfError ] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const borderValue = useColorModeValue('background.100', 'background.800')
    const email = user ? user.email : ""


    async function handleFetchProfile() {

        try {

            if (email === undefined) throw new Error("There was an issue retrieving your user information")


            const response = await getProfile(await getAccessTokenSilently(), email)

            if (response?.id === email) {
                setProfile(response)
                setProfError(false)
                setIsLoading(false)
            } else {
                throw new Error("There was an issue loading your associated profile.")
            }

        } catch (error) {
            console.log(error)
            setProfError(true)
            setIsLoading(false)
        }

    }

    const suggestions = profile?.genres?.map(genre => {
        const filtered = prompts?.filter(prompt => {

            return prompt.genres.includes(genre)
        })

        if (!filtered || !filtered[0]) return

        const suggested = filtered[Math.floor(Math.random() * filtered.length)]


        return (

            <Button
                key={`${suggested?.id}${genre}`}
                variant={'outline'}
                colorScheme="accent"
                size={['xs', null, 'sm']}
                onClick={() => updateActive(suggested?.id)}
            >
                #{suggested?.id} - {genre.toUpperCase()}
            </Button>
        )
    })


    useEffect(() => { handleFetchProfile() }, [isLoading])

    return (
        <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <Box mx={2} borderRightWidth={3} borderColor={borderValue} display={'flex'} flexDirection={"column"} p={4} gap={2}>
                    <Heading size={['xs', null, 'sm']}>Suggstions for you:</Heading>
                    <Divider></Divider>
                    {suggestions}
                    {profError ? 
                    <>
                    <Text>You must have an active profile to access this feature.</Text>
                    </> : <></>}
                </Box>


        </Skeleton>
    
    )

}
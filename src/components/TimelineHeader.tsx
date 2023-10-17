import { Box, Heading } from "@chakra-ui/react"

export function TimelineHeader(){

    return (
        <Box p={8}>
            <Heading>Prompts</Heading>
            <Heading size={{base: "xs", md: "sm"}}>Like, Reply or Create</Heading>

        </Box>
    )
}
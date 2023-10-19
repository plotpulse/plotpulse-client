import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react"

export function TimelineHeader() {

    return (
        <Box p={8} shadow={"2xl"} position={'unset'}>
            <Flex direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'}>
                <Button>New Prompt</Button>
                <Button onClick={() => window.scrollTo(0,0)}>Back to top</Button>
                <Button>Clear Filters</Button>
            </Flex>






        </Box >
    )
}
import { Box, BoxProps, Button, Flex, HStack, Heading } from "@chakra-ui/react"

interface TimelineHeaderProps extends BoxProps {
    topOfTl: () => void;
}

export function TimelineHeader({topOfTl}: TimelineHeaderProps) {

    return (
        <Box p={8} shadow={"2xl"}>
            <Flex direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'}>
                <Button>New Prompt</Button>
                <Button onClick={() => topOfTl()}>Back to top</Button>
                <Button>Clear Filters</Button>
            </Flex>






        </Box >
    )
}
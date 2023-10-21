import { Box, BoxProps, Button, Flex, } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react";
import { ALL_GENRES } from "../constants";

interface TimelineHeaderProps extends BoxProps {
    topOfTl: () => void;
    setFilters: Dispatch<SetStateAction<string[]>>;
}

export function TimelineHeader({topOfTl, setFilters}: TimelineHeaderProps) {

    return (
        <Box p={8} shadow={"2xl"}>
            <Flex direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'}>
                <Button>New Prompt</Button>
                <Button onClick={() => topOfTl()}>Back to top</Button>
                <Button onClick={() => setFilters(ALL_GENRES)}>Clear Filters</Button>
            </Flex>






        </Box >
    )
}
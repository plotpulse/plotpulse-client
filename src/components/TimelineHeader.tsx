import { Box, BoxProps, Button, Flex, } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react";
import { ALL_GENRES } from "../constants";
import { useNavigate } from "react-router";

interface TimelineHeaderProps extends BoxProps {
    topOfTl: () => void;
    
}


export function TimelineHeader({topOfTl}: TimelineHeaderProps) {
    const navigate = useNavigate()

    return (
        <Box p={4} shadow={"2xl"}>
            <Flex direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'}>
                <Button size={'sm'} onClick={() => navigate('/create')}>New Prompt</Button>
                <Button size={'sm'} onClick={() => topOfTl()}>Back to top</Button>
            </Flex>






        </Box >
    )
}
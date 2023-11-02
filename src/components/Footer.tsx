import { Box, useColorModeValue } from "@chakra-ui/react";

export function Footer(){
    const bgValue = useColorModeValue('accent.400', 'accent.700')

    return (
        <Box w={'100%'} h={'5rem'} bg={bgValue}>

        </Box>
        
    )
}


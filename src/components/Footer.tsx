import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

export function Footer(){
    const bgValue = useColorModeValue('accent.400', 'accent.700')

    return (
        <Box w={'100%'} h={'5rem'} bg={bgValue}>
            <Heading size='sm' p={4}> Plot Pulse c. 2023 - All Rights Reserved</Heading>

        </Box>
        
    )
}


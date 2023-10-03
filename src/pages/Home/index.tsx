import {
    Box, Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";




export function Home() {

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transitionDuration={'1'}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

                            <Text as={'span'}>
                                PlotPulse
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }}>
                            Get inspired for your next adventure.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button

                                variant='brandPrimary'>
                                View Prompts
                            </Button>
                            <Button variant='brandSecondary'>How It Works</Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}

                        src={'/notebook.svg'} />
                </Flex>
            </Stack>




        </Box>
    );
}
import { Stack, Flex, Heading, Button, Text, Image } from "@chakra-ui/react";

export function Hero(){
    return (
        <Stack minH={'85vh'} direction={{ base: 'column', md: 'row' }}>
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
                            <Button variant='brandSecondary'>Learn More</Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Illustration of two women writing collaboratively.'}

                        src={'/notebook.svg'} />
                </Flex>
            </Stack>
    )
}
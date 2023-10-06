import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, SimpleGrid, Box, useColorModeValue, Divider } from "@chakra-ui/react";


export function HowItWorks() {

    const accentVal = useColorModeValue('accent.700', 'accent.200')

    return (
        <Box minH={'80vh'} w={'full'} maxW={'xxl'} mt={4}>
        
        <Heading size='lg' textAlign={'center'} mb={8}>How It Works</Heading>

       
        <SimpleGrid spacing={4} columns={{ sm: 1, md: 3 }} mx={12} >
            <Card>
                <CardHeader>
                    <Heading size='md'><Text as='span' color={accentVal}>1. </Text>Sign Up for a Free Account</Heading>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Text>Create an account and a user profile. What type of content are you interested in? What genres are your favorite? What type of worlds do you want to build?</Text>
                </CardBody>
                <CardFooter>
                    <Button>Fix this button</Button>
                </CardFooter>
            </Card>



            <Card>
                <CardHeader>
                    <Heading size='md'><Text as='span' color={accentVal}>2. </Text> Get Inspired</Heading>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Text>View all of our user-submitted prompts. Find the inspiration for your next campaign, character build, or the next beat in your sprawling novel. Post replies to prompts and submit your own to keep the creative juices flowing!</Text>
                </CardBody>
                <CardFooter>
                    <Button>All Prompts</Button>
                </CardFooter>
            </Card>


            <Card>
                <CardHeader>
                    <Heading size='md'><Text as='span' color={accentVal}>3. </Text>Check Back Soon</Heading>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Text>Plot Pulse is growing, and we've got a ton of new features coming down the pipeline. Soon, you'll be able to use our platform to fully plan and document everything related to your unique creations.</Text>
                </CardBody>
                <CardFooter>
                    <Button>Coming soon!</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        </Box>


    )
}
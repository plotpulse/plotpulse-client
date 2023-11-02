import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, SimpleGrid, Box, useColorModeValue, Divider, Link as ChakraLink } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Link as RouterLink } from "react-router-dom";


export function HowItWorks() {

    const accentVal = useColorModeValue('accent.700', 'accent.200')
    const { loginWithRedirect } = useAuth0()
    const navigate = useNavigate()

    const signup = {
        authorizationParams: { redirect_uri: "http://localhost:5173/signup" }
    }

    return (
        <Box minH={'75vh'} w={'full'} maxW={'xxl'} mt={4} mb={16}>
        
        <Heading size='lg' textAlign={'center'} mb={8}>How It Works</Heading>

       
        <SimpleGrid spacing={4} columns={{ sm: 1, md: 3 }} mx={12} >
            <Card variant={'main'}>
                <CardHeader>
                    <Heading size='md'><Text as='span' color={accentVal}>1. </Text>Sign Up for a Free Account</Heading>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Text>Create an account and a user profile. What type of content are you interested in? What genres are your favorite? What type of worlds do you want to build?</Text>
                </CardBody>
                <CardFooter>
                    <Button variant={'brandPrimary'} onClick={() => loginWithRedirect(signup)}>Sign Up</Button>
                </CardFooter>
            </Card>



            <Card variant={'main'}>
                <CardHeader>
                    <Heading size='md'><Text as='span' color={accentVal}>2. </Text> Get Inspired</Heading>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Text>View all of our user-submitted prompts. Find the inspiration for your next campaign, character build, or the next beat in your sprawling novel. Post replies to prompts and submit your own to keep the creative juices flowing!</Text>
                </CardBody>
                <CardFooter>
                    <Button variant={'brandPrimary'} onClick={() => navigate('/feed')}>All Prompts</Button>
                </CardFooter>
            </Card>


            <Card variant={'main'}>
                <CardHeader>
                    <Heading size='md'><Text as='span' color={accentVal}>3. </Text>Check Back Soon</Heading>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <Text>Plot Pulse is growing, and we've got a ton of new features coming down the pipeline. Soon, you'll be able to use our platform to fully plan and document everything related to your unique creations.</Text>
                </CardBody>
                <CardFooter>
                    
                        <ChakraLink
                        as={RouterLink}
                        
                        to="https://github.com/plotpulse"
                        target="_blank">
                            <Button variant={'brandPrimary'}>GitHub</Button>
                        
                        </ChakraLink>
                        
                        
                </CardFooter>
            </Card>
        </SimpleGrid>
        </Box>


    )
}
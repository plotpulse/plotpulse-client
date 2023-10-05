import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, SimpleGrid, Box } from "@chakra-ui/react";


export function HowItWorks() {

    return (
        <Box w={'full'} maxW={'xxl'}>
        
        <Heading size='lg' textAlign={'center'} mb={8}>How It Works</Heading>

       
        <SimpleGrid spacing={4} columns={{ sm: 1, md: 3 }} mx={12} >
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>



            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>


            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        </Box>


    )
}
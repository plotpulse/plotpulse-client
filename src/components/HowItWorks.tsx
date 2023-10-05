import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, SimpleGrid } from "@chakra-ui/react";


export function HowItWorks(){

    return (

        <SimpleGrid spacing={4} columns={{sm: 1, md: 3}} mx={4} >
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
    )
}
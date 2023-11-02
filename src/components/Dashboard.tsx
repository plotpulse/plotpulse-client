import { Box, BoxProps, Button, HStack, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { IProfile } from "../shared-types";
import { useNavigate } from "react-router";

interface DashboardProps extends BoxProps {
    profile: IProfile | null;
}

export function Dashboard({ profile }: DashboardProps) {
    const navigate = useNavigate()


    return (
        <Box m={4} p={8} gap={4} display={'flex'} flexDirection={'column'} maxW={['100%', '75%']} mx={'auto'}>
            <Heading>Stay Tuned!</Heading>
            <Text>
                Hey there @{profile?.displayName}! ...You're here early.

            </Text>
            <Text>Plot Pulse is a new, fast-growing platform and there's a ton of features in store.</Text>
            <Text>Pretty soon, right here, you'll have a full HUD tailored directly to your preferences.</Text>

            <Heading size={'sm'} mt={8} mb={2}>Things we're building:</Heading>
            <UnorderedList>
                <ListItem>
                    A full suite of world-building organizational tools
                </ListItem>
                <ListItem>
                    A.I. integration to help you generate ideas
                </ListItem>
                <ListItem>
                    More ways to share inspiration and connect with other creatives
                </ListItem>

            </UnorderedList>

            <Text mt={6}>In the meantime:</Text>
            <HStack>
                <Button variant={'brandSecondary'} onClick={() => navigate('/feed')}>View Feed</Button>
                <Button variant={'brandSecondary'} onClick={() => navigate('/create')}>Create</Button>
                
            </HStack>


        </Box>

    )
}
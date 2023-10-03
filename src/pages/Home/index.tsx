import {
    Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Hero } from '../../components'




export function Home() {

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transitionDuration={'1'}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <Hero />




        </Box>
    );
}
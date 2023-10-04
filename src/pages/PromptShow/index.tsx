import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function PromptShow(){

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transitionDuration={'1'}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <p>
                Prompts go here
            </p>
        </Box>
    )
}


import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LoginButton, LogoutButton } from "../../components";

export function Home(){

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transitionDuration={'1'}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <p>
                Home page
            </p>
            <LoginButton/>
            <LogoutButton/>
        </Box>
    )
}
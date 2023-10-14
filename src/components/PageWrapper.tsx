import { Box } from "@chakra-ui/react"
import { MotionValue, motion } from "framer-motion"

import { ReactNode } from "react"

interface PageWrapperProps {
    children: ReactNode;
}


export function PageWrapper( { children }: PageWrapperProps ){

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transitionDuration={'1'}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {children}
            
        </Box>

    )
}

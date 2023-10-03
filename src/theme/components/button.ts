import { defineStyle, defineStyleConfig} from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const brandPrimary = defineStyle(
    (props: StyleFunctionProps) => ({
        background: mode('primary.800', 'primary.200')(props),
        color: mode('text.50', 'text.900')(props),
        _hover: {
            background: mode('primary.400', 'primary.50')(props),
        }
    })
)

const brandSecondary = defineStyle(

    (props: StyleFunctionProps) => ({
        background: mode('secondary.50', 'secondary.700')(props),
        color: mode('text.900', 'text.50')(props),
        _hover: {
            background: mode('secondary.200', 'secondary.500')(props)
        }
    })



    
)


export const buttonTheme = defineStyleConfig({
    variants: { brandPrimary, brandSecondary },
  })
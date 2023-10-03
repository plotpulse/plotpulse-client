import { defineStyle, defineStyleConfig} from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const brandPrimary = defineStyle(

    {
        background: 'primary.800',
        color: 'text.50',

        // let's also provide dark mode alternatives
        _dark: {
            background: 'primary.200',
            color: 'text.900',
        },

        _hover: {
            background: 'primary.400'
        }
    }
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
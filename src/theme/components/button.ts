import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle(

    {
        background: 'primary.800',
        color: 'text.50',

        // let's also provide dark mode alternatives
        _dark: {
            background: 'primary.200',
            color: 'text.900',
        }
    }
)

export const buttonTheme = defineStyleConfig({
    variants: { brandPrimary },
  })
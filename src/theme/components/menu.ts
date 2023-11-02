import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, } from '@chakra-ui/react'

import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle(
    (props: StyleFunctionProps) => (
        {
            list: {
              px: '4',
              py: '8',
              borderRadius: 'xl',
              borderColor: mode('background.300', 'background.700')(props),
              borderWidth: '12px',
              bg: mode('accent.200', 'accent.800')(props),
            },
            item: {
              my: '4',
              bg: mode('whiteAlpha.400', 'blackAlpha.400')(props),
              _hover: {
                bg: mode('accent.50', 'accent.600')(props),
              },
              _focus: {
                bg: mode('accent.50', 'accent.600')(props),
              },
              borderRadius: 'xl',
              fontFamily: 'heading',
              fontWeight: 'bold',
              textTransform: 'lowercase',
            },
          }

    )

)
export const menuTheme = defineMultiStyleConfig({ baseStyle })
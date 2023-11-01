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
              // this will style the MenuList component
          
          
              px: '4',
              py: '8',
              borderRadius: 'xl',
              borderColor: mode('background.300', 'background.700')(props),
              borderWidth: '12px',
              bg: mode('accent.200', 'accent.800')(props),
            },
            item: {
              // this will style the MenuItem and MenuItemOption components
          
          
              my: '4',
              bg: mode('WhiteAlpha400', 'BlackAlpha400')(props),
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
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })
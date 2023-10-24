import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'


const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const brand = definePartsStyle(
    
    (props: StyleFunctionProps) => (
        {
            // icon:{
            //     backgroundColor: mode('accent.300', 'accent.600')(props)

            // },
            control: {
              padding: 3, 
              borderColor: mode('background.300', 'background.600')(props)
            },
            container: {
                padding: 2,
                borderColor: mode('background.300', 'background.600')(props),
                borderWidth: 1,
                borderRadius: 'md',
                _hover: {
                    backgroundColor: mode('accent.200', 'accent.700')(props),
                    borderColor: mode('accent.300', 'accent.600')(props),
                },
                
            }
          }

    )
    


)

export const checkboxTheme = defineMultiStyleConfig({
    variants: { brand }
})
import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'


const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);



const baseStyle = definePartsStyle({
      container: {
       padding: '2'
      },
      header: {
        paddingBottom: "2px"
      },
      body: {
        paddingTop: "2px"
      },

});

const variants = {
    main: definePartsStyle(
        (props: StyleFunctionProps) => ({

            container: {
                backgroundColor: mode('background.100', 'background.800')(props),
                borderColor: mode('background.200', 'background.700')(props),
                borderWidth: '5px',
                borderBottomLeftRadius: '60',
                borderTopRightRadius: '60',


            }

        }),
    ),
    prompt: definePartsStyle(
        (props: StyleFunctionProps) => ({

            container: {
                backgroundColor: mode('background.50', 'background.900')(props),
                borderColor: mode('accent.100', 'accent.800')(props),
                borderWidth: '6px',
                padding: '4',
                boxShadow: '2px',
                borderStyle: 'inset'
            }
        }),
    ),
    reply: definePartsStyle(
        (props: StyleFunctionProps) => ({

            container: {
                backgroundColor: mode('background.50', 'background.900')(props),
                borderColor: mode('background.100', 'background.800')(props),
                borderWidth: '6px',
                padding: '4',
                boxShadow: '2px',
                borderStyle: 'inset'
            }
        }),
    )
};


export const cardTheme = defineMultiStyleConfig({
    baseStyle,
    variants,

});
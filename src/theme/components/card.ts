import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'


const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);



const baseStyle = definePartsStyle({
    //   container: {
    //     backgroundColor: "blue.50",
    //     _dark:{
    //       backgroundColor: "blue.800",
    //     }
    //   },
    //   header: {
    //     paddingBottom: "2px"
    //   },
    //   body: {
    //     paddingTop: "2px"
    //   },
    //   footer: {
    //     paddingTop: "4px"
    //   }
});

const variants = {
    brandPrimary: definePartsStyle(
        (props: StyleFunctionProps) => ({

            container: {
                backgroundColor: mode('background.100', 'background.800')(props),
                borderColor: mode('accent.800', 'accent.200')(props),
                borderWidth: '3px',
                borderBottomLeftRadius: '60',
                borderTopRightRadius: '60',
                

            }

        }),
    // brandPrimary: definePartsStyle({
    //     container: {
    //       borderColor: "#459cc6",
    //       borderWidth: "3px",
    //       color: "chakra-body-text"
    //     }
    //   })
  )};


export const cardTheme = defineMultiStyleConfig({
    baseStyle,
    variants,

});
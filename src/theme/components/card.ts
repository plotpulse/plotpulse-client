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
    main: definePartsStyle(
        (props: StyleFunctionProps) => ({

            container: {
                backgroundColor: mode('background.100', 'background.900')(props),
                borderColor: mode('background.200', 'background.800')(props),
                borderWidth: '5px',
                borderBottomLeftRadius: '60',
                borderTopRightRadius: '60',


            }

        }),
    )
};


export const cardTheme = defineMultiStyleConfig({
    baseStyle,
    variants,

});
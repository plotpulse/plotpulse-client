import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle(
    (props: StyleFunctionProps) => (
        {
            dialog: {

                borderRadius: 'md',
                bg: mode('background.100', 'background.800')(props),
            },
        }

    )

)

export const modalTheme = defineMultiStyleConfig({
    baseStyle,
})
import { defineStyle, defineStyleConfig, cssVar } from '@chakra-ui/react'

const $startColor = cssVar('skeleton-start-color')
const $endColor = cssVar('skeleton-end-color')

const accent = defineStyle({
    _light: {
        [$startColor.variable]: 'colors.background.100',
        [$endColor.variable]: 'colors.accent.300',
    },
    _dark: {
        [$startColor.variable]: 'colors.background.800',
        [$endColor.variable]: 'colors.accent.700',
    },
})
export const skeletonTheme = defineStyleConfig({
    defaultProps: {
        variant: 'accent',
    },
    variants: { accent },
})
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('text.900', 'text.50')(props),
      bg: mode('background.50', 'bakground.900')(props),
    },
    '*::placeholder': {
      color: mode('text.900', 'text.50')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}

export default styles
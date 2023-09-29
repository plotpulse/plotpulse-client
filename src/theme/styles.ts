import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('text.lm', 'text.dm')(props),
      bg: mode('background.lm', 'bakground.dm')(props),
    },
    '*::placeholder': {
      color: mode('text.lm', 'text.dm')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}

export default styles
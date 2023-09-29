import { extendTheme } from "@chakra-ui/react";

import colors from './colors'
// import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const overrides: Record<string, any> = {
    colors,
  // styles,
  // borders,
  // // Other foundational style overrides go here
  // components: {
  //   Button,
  //   // Other components go here
  // },
}

export default extendTheme(overrides)
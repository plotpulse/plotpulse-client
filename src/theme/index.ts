import { extendTheme } from "@chakra-ui/react";

import colors from './colors'
import fonts from "./fonts";
import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import { buttonTheme } from './components/button'

const overrides: Record<string, any> = {
    colors,
    fonts,
    styles,
    // borders,
    // // Other foundational style overrides go here
    components: {
      Button: buttonTheme,
      // Other components go here
    },
}

export default extendTheme(overrides)
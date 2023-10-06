import { extendTheme } from "@chakra-ui/react";

import '@fontsource/comfortaa';
import '@fontsource/hepta-slab';

import config from "./config";
import colors from './colors'
import fonts from "./fonts";
import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import { buttonTheme } from './components/button'
import { cardTheme } from "./components/card";

const overrides: Record<string, any> = {
    config,
    colors,
    fonts,
    styles,
    // borders,
    // // Other foundational style overrides go here
    components: {
      Button: buttonTheme,
      Card: cardTheme
      // Other components go here
    },
}

export default extendTheme(overrides)
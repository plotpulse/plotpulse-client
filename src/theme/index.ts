import { extendTheme } from "@chakra-ui/react";

import '@fontsource/comfortaa';
import '@fontsource/hepta-slab';

import config from "./config";
import colors from './colors'
import fonts from "./fonts";
import styles from './styles'

// Foundational style overrides


// Component style overrides
import { buttonTheme } from './components/button'
import { cardTheme } from "./components/card";
import { checkboxTheme } from "./components/checkboxgroup";
import { menuTheme } from "./components/menu";
import { modalTheme } from "./components/modal";
import { skeletonTheme } from "./components/skeleton";

const overrides: Record<string, any> = {
    config,
    colors,
    fonts,
    styles,

    components: {
      Button: buttonTheme,
      Card: cardTheme,
      Checkbox: checkboxTheme,
      Menu: menuTheme,
      Modal: modalTheme,
      Skeleton: skeletonTheme,
  
    },
}

export default extendTheme(overrides)
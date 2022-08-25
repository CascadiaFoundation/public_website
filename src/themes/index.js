import { createTheme } from '@mui/material/styles';

import componentStyleOverrides from './componentStyleOverrides';
import themePalette from './palette';
import themeTypography from './typography';

const colors = {
  dark: {
    light: '#242526',
    main: '#18191A',
    dark: '#101010'
  },
  text: {
    primary: "#18191A",
    secondary: "#616771"
  },
  background: {
    "light": "#FFFFFF",
    "main": "#F6F7F8",
    "dark": "#E9EBEE"
  },
  primary: {
    main: "#4267B3"
  },
  secondary: {
    main: "#18191A"
  }
};

export const theme = (options) => {
  const themeOption = {
    colors
  };

  const themeOptions = {
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
    components: componentStyleOverrides(themeOption)
  }

  const themes = createTheme(themeOptions);

  return themes;
}

export default theme;
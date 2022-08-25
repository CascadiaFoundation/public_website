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
  light: {
    light: '#E4E6EB',
    main: '#DCDFE7',
    dark: '#B0B3B8'
  },
  primary: {
    light: '#4267B2',
    dark: '#1778F2'
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
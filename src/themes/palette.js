export default function themePalette(theme) {
  return {
    background: {
      default: theme.colors.background.main,
      paper: theme.colors.background.light
    },
    primary: {
      main: theme.colors.primary.main
    },
    secondary: {
      main: theme.colors.secondary.main
    }
  };
};
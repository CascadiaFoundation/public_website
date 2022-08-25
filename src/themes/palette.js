export default function themePalette(theme) {
  return {
    background: {
      default: theme.colors.background.main,
      paper: theme.colors.background.light
    },
    primary: {
      main: theme.colors.primary.main,
      contrastText: theme.colors.background.main
    },
    secondary: {
      main: theme.colors.secondary.main
    },
    text: {
      primary: theme.colors.text.primary,
      seconadry: theme.colors.text.seconadry
    }
  };
};
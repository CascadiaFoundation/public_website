export default function componentStyleOverrides(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'capitalize',
          '&.MuiButton-containedSecondary': {
            backgroundColor: theme.colors?.dark.main
          },
        },
        text: {
          padding: 0,
          '&.font-bold': {
            fontWeight: 700
          },
          '&:hover': {
            backgroundColor: 'transparent',
          }
        }
      }
    },
  };
};
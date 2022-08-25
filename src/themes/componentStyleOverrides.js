export default function componentStyleOverrides(theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          borderRadius: 0,
          boxShadow: 'none',
          textTransform: 'capitalize',
          '&.MuiButton-containedSecondary': {
            backgroundColor: theme.colors?.dark.main
          },
          '&:hover': {
            boxShadow: 'none'
          }
        },
        text: {
          textAlign: 'left',
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
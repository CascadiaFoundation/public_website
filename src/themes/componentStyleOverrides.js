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
    MuiAvatar: {
      styleOverrides: {
        root: {
          '&.bg-primary': {
            backgroundColor: theme.colors.primary.main
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    }
  };
};
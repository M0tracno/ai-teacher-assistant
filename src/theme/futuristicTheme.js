import { createTheme } from '@material-ui/core/styles';

// Create a futuristic theme with modern colors and effects
const futuristicTheme = createTheme({
  palette: {
    primary: {
      main: '#3a86ff', // Vibrant blue
      light: '#8fb8ff',
      dark: '#0057cc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8338ec', // Vibrant purple
      light: '#b97aff',
      dark: '#4c00b9',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
      dark: '#121212',
      gradient: 'linear-gradient(135deg, #3a86ff 0%, #8338ec 100%)',
      glassEffect: 'rgba(255, 255, 255, 0.8)',
    },
    success: {
      main: '#06d6a0', // Teal
      light: '#6aecce',
      dark: '#049e76',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef476f', // Pink-red
      light: '#ff7a9c',
      dark: '#b80046',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffd166', // Yellow
      light: '#ffe499',
      dark: '#cc9c33',
      contrastText: '#2b2d42',
    },
    info: {
      main: '#118ab2', // Blue-teal
      light: '#56b9e0',
      dark: '#006082',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#2b2d42',
      secondary: '#8d99ae',
      disabled: '#c7c7c7',
      hint: '#6c757d',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      letterSpacing: '0em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 12,
        textTransform: 'none',
        padding: '10px 24px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 500,
        letterSpacing: '0.02em',
      },
      contained: {
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 8px 25px 0 rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'translateY(1px)',
          boxShadow: '0 3px 15px 0 rgba(0, 0, 0, 0.1)',
          transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: -100,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.2)',
          transform: 'skewX(-15deg)',
          transition: 'all 0.5s ease',
          pointerEvents: 'none',
        },
        '&:hover::after': {
          left: 100,
        },
      },
      outlined: {
        borderWidth: '1.5px',
        '&:hover': {
          borderWidth: '1.5px',
          background: 'rgba(0, 0, 0, 0.04)',
        },
      },
      text: {
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.04)',
          transform: 'translateY(-1px)',
        },
      },
      containedPrimary: {
        background: 'linear-gradient(135deg, #3a86ff 0%, #4361ee 100%)',
        '&:hover': {
          background: 'linear-gradient(135deg, #4361ee 0%, #3a86ff 100%)',
        },
      },
      containedSecondary: {
        background: 'linear-gradient(135deg, #8338ec 0%, #5e60ce 100%)',
        '&:hover': {
          background: 'linear-gradient(135deg, #5e60ce 0%, #8338ec 100%)',
        },
      },
      label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0 8px 40px -12px rgba(0, 0, 0, 0.1)',
        borderRadius: 16,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          boxShadow: '0 16px 70px -12px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-4px)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        },
        '&:hover::before': {
          opacity: 1,
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 16,
      },
      elevation1: {
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      },
      elevation2: {
        boxShadow: '0 8px 30px 0 rgba(0, 0, 0, 0.07)',
      },
      elevation3: {
        boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.09)',
      },
      elevation4: {
        boxShadow: '0 16px 50px 0 rgba(0, 0, 0, 0.11)',
      },
      root: {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        background: 'linear-gradient(90deg, #3a86ff 0%, #4361ee 100%)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      },
      root: {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    MuiDrawer: {
      paper: {
        borderRadius: 0,
        boxShadow: '0 8px 40px -12px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 100%)',
        backdropFilter: 'blur(10px)',
      },
      root: {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    MuiTabs: {
      root: {
        borderRadius: 8,
        overflow: 'visible',
        marginBottom: 16,
      },
      indicator: {
        height: 3,
        borderRadius: 1.5,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        padding: '12px 16px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 8,
        '&$selected': {
          backgroundColor: 'rgba(58, 134, 255, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(58, 134, 255, 0.15)',
          },
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      button: {
        transition: 'all 0.2s ease',
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 12,
        transition: 'all 0.2s ease',
        fontSize: '1rem',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 12,
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        },
        '&.Mui-focused': {
          boxShadow: '0 0 0 2px rgba(58, 134, 255, 0.2)',
        },
      },
      notchedOutline: {
        borderColor: 'rgba(0, 0, 0, 0.15)',
        transition: 'border-color 0.2s ease-in-out',
      },
      input: {
        padding: '14px 16px',
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: '12px 12px 0 0',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiChip: {
      root: {
        borderRadius: 8,
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
      colorPrimary: {
        background: 'linear-gradient(135deg, #3a86ff 0%, #4361ee 100%)',
      },
      colorSecondary: {
        background: 'linear-gradient(135deg, #8338ec 0%, #5e60ce 100%)',
      },
    },
    MuiAvatar: {
      root: {
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
        border: '2px solid #ffffff',
      },
    },
    MuiSwitch: {
      root: {
        padding: 8,
      },
      track: {
        borderRadius: 22 / 2,
        opacity: 0.3,
      },
      thumb: {
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    MuiCheckbox: {
      root: {
        padding: 9,
      },
    },
    MuiRadio: {
      root: {
        padding: 9,
      },
    },
    MuiSlider: {
      root: {
        height: 8,
        padding: '15px 0',
      },
      thumb: {
        height: 20,
        width: 20,
        marginTop: -6,
        marginLeft: -10,
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        },
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
        opacity: 0.3,
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiAppBar: {
      elevation: 0,
    },
    MuiCard: {
      elevation: 0,
    },
    MuiInputBase: {
      spellCheck: false,
    },
    MuiTextField: {
      variant: 'outlined',
      margin: 'normal',
      fullWidth: true,
    },
    MuiLink: {
      underline: 'hover',
    },
    MuiMenu: {
      getContentAnchorEl: null,
    },
    MuiTooltip: {
      arrow: true,
    },
  },
});

export default futuristicTheme;
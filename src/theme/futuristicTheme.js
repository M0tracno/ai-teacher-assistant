import { createTheme } from '@mui/material/styles';

// Create a futuristic theme with modern colors and effects
const futuristicTheme = createTheme({
  palette: {
    primary: {
      main: '#3a86ff', // Vibrant blue
      light: '#6ba1ff',
      dark: '#0052cc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8338ec', // Vibrant purple
      light: '#a55ffd',
      dark: '#5a1db3',
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
      primary: '#2d3436',
      secondary: '#636e72',
      disabled: '#c7c7c7',
      hint: '#6c757d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #3a86ff 30%, #8338ec 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
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
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
          boxShadow: '0 4px 20px rgba(58, 134, 255, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 25px rgba(58, 134, 255, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #3a86ff 30%, #8338ec 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #2d6bff 30%, #6b2fd3 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover fieldset': {
              borderColor: '#3a86ff',
            },
          },
        },
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
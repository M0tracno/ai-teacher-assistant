import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Link as MaterialLink
} from '@material-ui/core';
import {
  School as SchoolIcon,
  Person as PersonIcon,
  People as PeopleIcon,
  SupervisorAccount as AdminIcon,
  PlayCircleOutline as DemoIcon
} from '@material-ui/icons';
import { useAuth } from '../auth/AuthContext';
import { APP_NAME, ROLES, THEME_CONSTANTS } from '../constants/appConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: THEME_CONSTANTS.GRADIENTS.DARK,
    padding: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%233a86ff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      opacity: 0.8,
    }
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    position: 'relative',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    textShadow: '0 0 20px rgba(58, 134, 255, 0.5)',
    letterSpacing: '1px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: 'linear-gradient(90deg, #3a86ff, #8338ec)',
      borderRadius: '2px',
    }
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: theme.spacing(2),
  },
  roleCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -5,
      left: -5,
      right: -5,
      bottom: -5,
      background: 'linear-gradient(45deg, rgba(58, 134, 255, 0), rgba(58, 134, 255, 0.3), rgba(58, 134, 255, 0))',
      zIndex: -1,
      transform: 'rotate(0deg)',
      transition: 'all 0.5s ease',
      opacity: 0,
      borderRadius: '20px',
    },
    '&:hover': {
      transform: 'translateY(-12px) scale(1.02)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), 0 0 15px rgba(58, 134, 255, 0.3)',
      '&::before': {
        opacity: 1,
        transform: 'rotate(180deg)',
        animation: '$borderGlow 3s infinite linear',
      },
    },
    animation: '$fadeInUp 0.6s backwards',
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(40px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes borderGlow': {
    '0%': {
      background: 'linear-gradient(45deg, rgba(58, 134, 255, 0), rgba(58, 134, 255, 0.3), rgba(58, 134, 255, 0))',
    },
    '50%': {
      background: 'linear-gradient(45deg, rgba(131, 56, 236, 0), rgba(131, 56, 236, 0.3), rgba(131, 56, 236, 0))',
    },
    '100%': {
      background: 'linear-gradient(45deg, rgba(58, 134, 255, 0), rgba(58, 134, 255, 0.3), rgba(58, 134, 255, 0))',
    },
  },
  cardMedia: {
    height: 160,
    position: 'relative',
    overflow: 'hidden',
  },
  cardMediaOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  cardIcon: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: 'white',
  },
  iconLarge: {
    fontSize: 70,
    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  roleButton: {
    marginTop: theme.spacing(1),
    borderRadius: '8px',
    padding: '12px 0',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '44px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: -100,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.2)',
      transform: 'skewX(-15deg)',
      transition: 'all 0.5s ease',
    },
    '&:hover::before': {
      left: 100,
    },
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    '& > button:first-child': {
      marginBottom: theme.spacing(1),
    },
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: theme.spacing(4),
    position: 'relative',
    zIndex: 1
  },
  creatorLink: {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    transition: 'color 0.3s ease, text-shadow 0.3s ease',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none',
      textShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
    }
  },
  bullet: {
    margin: '0 8px',
    opacity: 0.6
  },
  demoButton: {
    marginBottom: theme.spacing(6),
    background: 'linear-gradient(45deg, #06d6a0 30%, #1b9aaa 90%)',
    color: 'white',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '30px',
    boxShadow: '0 4px 20px rgba(6, 214, 160, 0.4)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    animation: '$pulse 2s infinite',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 7px 30px rgba(6, 214, 160, 0.6)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
      opacity: 0,
      transform: 'scale(0.5)',
      transition: 'all 0.5s ease-out',
    },
    '&:hover::after': {
      opacity: 1,
      transform: 'scale(1)',
      animation: '$ripple 1.5s ease-out',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0.5)',
      opacity: 0.3,
    },
    '100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

// Creator Credits Component
const CreatorCredits = ({ classes }) => {
  const creators = [
    {
      name: 'Ayushman Nanda',
      linkedin: 'www.linkedin.com/in/ayushman-nanda-4a1377312'
    },
    {
      name: 'Aman Prakash',
      linkedin: 'linkedin.com/in/aman-prakash-baa32228a'
    },
    {
      name: 'Aadersh Singh',
      linkedin: 'www.linkedin.com/in/aadersh-kumar-188274356'
    },
    {
      name: 'Akshat Jaiswal',
      linkedin: 'https://www.linkedin.com/in/akshatjaiswal27/'
    }
  ];

  return (
    <Box className={classes.footer}>
      <Typography variant="body2">
        Created with passion by{' '}
        {creators.map((creator, index) => (
          <React.Fragment key={creator.name}>
            <MaterialLink
              href={creator.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.creatorLink}
            >
              {creator.name}
            </MaterialLink>
            {index < creators.length - 1 && <span className={classes.bullet}>•</span>}
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};

const RoleSelection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { setDemoMode, currentUser, userRole } = useAuth();

  // If already in demo mode with role, redirect to dashboard
  useEffect(() => {
    const demoMode = localStorage.getItem('demoMode') === 'true';
    const demoRole = localStorage.getItem('demoRole');
    
    if (demoMode && demoRole) {
      console.log('Already in demo mode, redirecting to dashboard');
      
      if (demoRole === 'faculty') {
        navigate('/faculty-dashboard');
      } else if (demoRole === 'student') {
        navigate('/student-dashboard');
      } else if (demoRole === 'parent') {
        navigate('/parent-dashboard');
      } else if (demoRole === 'admin') {
        navigate('/admin-dashboard');
      }
    }
    
    // If authenticated already, redirect to appropriate dashboard
    if (currentUser && userRole) {
      if (userRole === 'faculty') {
        navigate('/faculty-dashboard');
      } else if (userRole === 'student') {
        navigate('/student-dashboard');
      } else if (userRole === 'parent') {
        navigate('/parent-dashboard');
      } else if (userRole === 'admin') {
        navigate('/admin-dashboard');
      }
    }
  }, [navigate, currentUser, userRole]);

  const roles = [
    {
      title: ROLES.FACULTY_DISPLAY,
      description: ROLES.FACULTY_DESC,
      icon: <SchoolIcon className={classes.iconLarge} />,
      path: '/faculty-login',
      gradient: THEME_CONSTANTS.GRADIENTS.FACULTY,
      demoRole: 'faculty',
    },
    {
      title: ROLES.STUDENT_DISPLAY,
      description: ROLES.STUDENT_DESC,
      icon: <PersonIcon className={classes.iconLarge} />,
      path: '/student-login',
      gradient: THEME_CONSTANTS.GRADIENTS.STUDENT,
      demoRole: 'student',
    },
    {
      title: ROLES.PARENT_DISPLAY,
      description: ROLES.PARENT_DESC,
      icon: <PeopleIcon className={classes.iconLarge} />,
      path: '/parent-login',
      gradient: THEME_CONSTANTS.GRADIENTS.PARENT,
      demoRole: 'parent',
    },
    {
      title: ROLES.ADMIN_DISPLAY,
      description: ROLES.ADMIN_DESC,
      icon: <AdminIcon className={classes.iconLarge} />,
      path: '/admin-login',
      gradient: THEME_CONSTANTS.GRADIENTS.ADMIN,
      demoRole: 'admin',
    },
  ];

  const handleDemoLogin = async (role = 'faculty') => {
    try {
      // Set demo mode to true and store in localStorage for persistence
      setDemoMode(true);
      localStorage.setItem('demoMode', 'true');
      localStorage.setItem('demoRole', role);
      
      // Navigate to appropriate dashboard based on role
      if (role === 'faculty') {
        navigate('/faculty-dashboard');
      } else if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'parent') {
        navigate('/parent-dashboard');
      } else if (role === 'admin') {
        navigate('/admin-dashboard');
      }
    } catch (error) {
      console.error('Demo login error:', error);
      // Force demo mode even on error and navigate
      localStorage.setItem('demoMode', 'true');
      localStorage.setItem('demoRole', role);
      
      // Fallback navigation
      navigate(`/${role}-dashboard`);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography variant="h2" component="h1" className={classes.title}>
            {APP_NAME}
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Enter the ancient wisdom with modern technology
          </Typography>
        </div>
        
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            className={classes.demoButton}
            onClick={() => handleDemoLogin('faculty')}
            startIcon={<DemoIcon />}
          >
            Enter Demo Mode - No Login Required
          </Button>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {roles.map((role, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={classes.roleCard} style={{ animationDelay: `${index * 0.15}s` }}>
                <CardMedia className={classes.cardMedia}>
                  <div className={classes.cardMediaOverlay} style={{ background: role.gradient }}></div>
                  <div className={classes.cardIcon}>{role.icon}</div>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2" gutterBottom className={classes.roleTitle}>
                    {role.title}
                  </Typography>
                  <Typography variant="body2" className={classes.roleDescription}>
                    {role.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button 
                    component={Link} 
                    to={role.path}
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    className={classes.roleButton}
                  >
                    Login as {role.title}
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    fullWidth
                    className={classes.roleButton}
                    onClick={() => handleDemoLogin(role.demoRole)}
                  >
                    Demo as {role.title}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <CreatorCredits classes={classes} />
      </Container>
    </div>
  );
};

export default RoleSelection;
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Typography, Button, Box, Paper, Snackbar } from '@material-ui/core';
import futuristicTheme from './theme/futuristicTheme';
import { APP_NAME, ROLES, DASHBOARD_PATHS, LOGIN_PATHS } from './constants/appConstants';
import { Alert } from '@material-ui/lab';

// Auth components and context
import { AuthProvider, useAuth } from './auth/AuthContext';

// Error handling
import ErrorFallback from './components/ErrorFallback';

// Page components
import RoleSelection from './pages/RoleSelection';
import FacultyLogin from './pages/FacultyLogin';
import StudentLogin from './pages/StudentLogin';
import ParentLogin from './pages/ParentLogin';
import AdminLogin from './pages/AdminLogin';

import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';
import AdminDashboard from './pages/AdminDashboard';

import NotFound from './pages/NotFound';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // Activate demo mode on catastrophic error
    try {
      localStorage.setItem('demoMode', 'true');
      localStorage.setItem('demoRole', 'faculty');
    } catch (e) {
      console.error('Failed to set demo mode in localStorage:', e);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError) {
      // Use our custom error fallback component
      return <ErrorFallback 
        error={this.state.error} 
        resetErrorBoundary={this.resetError} 
      />;
    }

    return this.props.children;
  }
}

// Use the futuristic theme
const theme = futuristicTheme;

// Private route component
function PrivateRoute({ children, allowedRoles }) {
  const { currentUser, userRole, demoMode } = useAuth();
  const location = useLocation();
  
  // Check if user is authenticated and has allowed role, or if in demo mode
  const isAuthorized = 
    (currentUser && allowedRoles.includes(userRole)) || 
    (demoMode && allowedRoles.includes(localStorage.getItem('demoRole')));
  
  console.log('PrivateRoute check:', {
    path: location.pathname,
    demoMode,
    demoRole: localStorage.getItem('demoRole'),
    currentUser: !!currentUser,
    userRole,
    allowedRoles,
    isAuthorized
  });

  if (!isAuthorized) {
    // If not authorized but in demo mode, try to set the role
    if (demoMode) {
      const pathRole = getPathRole(location.pathname);
      if (pathRole && allowedRoles.includes(pathRole)) {
        localStorage.setItem('demoRole', pathRole);
        console.log('Setting demo role from path:', pathRole);
        return children;
      }
    }
    
    // Redirect to login when not authorized
    if (demoMode) {
      // In demo mode, redirect to role selection
      return <Navigate to="/" state={{ from: location }} replace />;
    } else {
      // In normal mode, redirect to appropriate login based on role
      const roleLoginPaths = {
        faculty: '/faculty-login',
        student: '/student-login',
        parent: '/parent-login',
        admin: '/admin-login'
      };
      
      // Choose the first allowed role for redirection
      const redirectPath = roleLoginPaths[allowedRoles[0]] || '/';
      return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }
  }

  return children;
}

// Helper to extract role from path
function getPathRole(path) {
  if (path.includes('faculty')) return 'faculty';
  if (path.includes('student')) return 'student';
  if (path.includes('parent')) return 'parent';
  if (path.includes('admin')) return 'admin';
  return null;
}

// Demo mode notification
function DemoModeNotification() {
  const { demoMode } = useAuth();
  const [open, setOpen] = useState(true); // Always show notification initially
  const demoRole = localStorage.getItem('demoRole') || 'admin';
  
  // Get display name for role
  const getRoleDisplay = (role) => {
    switch(role) {
      case 'faculty': return ROLES.FACULTY_DISPLAY;
      case 'student': return ROLES.STUDENT_DISPLAY;
      case 'parent': return ROLES.PARENT_DISPLAY;
      case 'admin': return ROLES.ADMIN_DISPLAY;
      default: return 'User';
    }
  };
  
  useEffect(() => {
    if (demoMode) {
      setOpen(true);
      
      // Auto-close after 10 seconds
      const timer = setTimeout(() => {
        setOpen(false);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [demoMode]);
  
  // Always show notification in demo mode
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => setOpen(false)}
      style={{ zIndex: 9999 }}
    >
      <Alert 
        severity="info" 
        onClose={() => setOpen(false)}
        style={{ 
          background: 'rgba(58, 134, 255, 0.9)', 
          color: 'white',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(58, 134, 255, 0.3)'
        }}
      >
        <strong>✨ {APP_NAME} Demo Active</strong> - You are experiencing as: {getRoleDisplay(demoRole)} - 
        Firebase authentication is disabled
      </Alert>
    </Snackbar>
  );
}

// Base URL for deployed app
const getBasename = () => {
  // Get basename from package.json homepage or default to '/'
  if (process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL;
  }
  
  // Check for GitHub pages repo format
  const pathSegments = window.location.pathname.split('/');
  if (pathSegments.length > 2) {
    return '/' + pathSegments[1]; // e.g., /repo-name
  }
  
  return '/';
};

function App() {
  // Check if this is a deployed environment
  const [isDeployed] = useState(() => {
    // If we're not on localhost, we consider it deployed
    return !window.location.hostname.includes('localhost') && 
           !window.location.hostname.includes('127.0.0.1');
  });
  
  // Log deployment environment
  useEffect(() => {
    console.log('App environment:', {
      isDeployed,
      basename: getBasename(),
      hostname: window.location.hostname,
      pathname: window.location.pathname,
      href: window.location.href,
      publicUrl: process.env.PUBLIC_URL || '/'
    });
    
    // Set document title to app name
    document.title = APP_NAME;
  }, [isDeployed]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <AuthProvider>
          <DemoModeButton />
          <Router basename={isDeployed ? getBasename() : '/'}>
            <DemoModeNotification />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<RoleSelection />} />
              <Route path="/faculty-login" element={<FacultyLogin />} />
              <Route path="/student-login" element={<StudentLogin />} />
              <Route path="/parent-login" element={<ParentLogin />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              
              {/* Private routes */}
              <Route 
                path="/faculty-dashboard/*" 
                element={
                  <PrivateRoute allowedRoles={['faculty']}>
                    <FacultyDashboard />
                  </PrivateRoute>
                } 
              />
              
              <Route 
                path="/student-dashboard/*" 
                element={
                  <PrivateRoute allowedRoles={['student']}>
                    <StudentDashboard />
                  </PrivateRoute>
                } 
              />
              
              <Route 
                path="/parent-dashboard/*" 
                element={
                  <PrivateRoute allowedRoles={['parent']}>
                    <ParentDashboard />
                  </PrivateRoute>
                } 
              />
              
              <Route 
                path="/admin-dashboard/*" 
                element={
                  <PrivateRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </PrivateRoute>
                } 
              />
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

// Demo mode shortcut button for quick troubleshooting
function DemoModeButton() {
  const { forceDemo } = useAuth();
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      zIndex: 9999 
    }}>
      <Button 
        variant="contained" 
        color="secondary" 
        size="small"
        onClick={forceDemo}
        style={{ 
          opacity: 0.9,
          background: 'linear-gradient(45deg, #8338ec 30%, #3a86ff 90%)',
          boxShadow: '0 4px 20px rgba(131, 56, 236, 0.4)',
          borderRadius: '30px',
          padding: '8px 16px',
          fontWeight: 500,
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 7px 25px rgba(131, 56, 236, 0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(131, 56, 236, 0.4)';
        }}
      >
        Enable Demo Mode
      </Button>
    </div>
  );
}

export default App;
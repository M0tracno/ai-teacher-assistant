import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Log environment configuration
console.log('Environment Configuration:', {
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  PUBLIC_URL: process.env.PUBLIC_URL,
  DEMO_MODE: process.env.REACT_APP_FORCE_DEMO_MODE
});

// Initialize demo mode
if (process.env.REACT_APP_FORCE_DEMO_MODE === 'true') {
  localStorage.setItem('demoMode', 'true');
  if (!localStorage.getItem('demoRole')) {
    localStorage.setItem('demoRole', 'admin');
  }
}

// Add error handling for debugging
window.addEventListener('error', (event) => {
  console.error('Global error caught:', {
    message: event.error?.message,
    stack: event.error?.stack,
    location: window.location.href,
    timestamp: new Date().toISOString()
  });
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', {
    reason: event.reason,
    location: window.location.href,
    timestamp: new Date().toISOString()
  });
});

// React 18 rendering with error boundary
const root = document.getElementById('root');
const renderApp = () => {
  try {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    // Show error UI
    root.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: red;">Application Error</h2>
        <p>Something went wrong while loading the application. Please try refreshing the page.</p>
        <pre style="background: #f1f1f1; padding: 10px; border-radius: 5px; white-space: pre-wrap;">
          Error: ${error.message}
          Stack: ${error.stack}
        </pre>
        <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px;">
          Reload Application
        </button>
      </div>
    `;
  }
};

renderApp();

// Performance monitoring
reportWebVitals(console.log); 
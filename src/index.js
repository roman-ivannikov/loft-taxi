import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
import { theme } from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './components/AuthContext';


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
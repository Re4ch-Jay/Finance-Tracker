import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FinanceContextProvider from './context/FinanceContext';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <FinanceContextProvider>
          <App />
        </FinanceContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

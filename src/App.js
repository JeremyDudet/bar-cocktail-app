import React from 'react';
import GlobalStyle from './globalStyles';
import  { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer } from './components/';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './routers/AppRouter';


export function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <AppRouter/>
        <Footer />
      </Router>
    </AuthProvider>
  );
};


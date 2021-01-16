import React from 'react';
import GlobalStyle from './globalStyles';
import  { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer } from './components/';
import AppRouter from './routers/AppRouter';


export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AppRouter/>
      <Footer />
    </Router>
  );
};


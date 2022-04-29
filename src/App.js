import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;

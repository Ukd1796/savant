import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './utils';
import Home from './components/HomePage/Home';
import ScrollToTop from './utils/ScrollToTop';
import Layout from './components/Layout/layout';

function App() {
  return (
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Home/>
          <Footer />
      </Router>
  );
}

export default App;

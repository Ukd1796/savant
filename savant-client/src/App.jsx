import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './utils';
import Home from './components/HomePage/Home';
import ScrollToTop from './utils/ScrollToTop';
import {motion} from 'framer-motion';
import { AuthContextProvider } from './context/AuthContext';


const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function App() {
  return (
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
>
  <AuthContextProvider>
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Home/>
          <Footer />
      </Router>
    </AuthContextProvider>
    </motion.main>
      
  );
}

export default App;

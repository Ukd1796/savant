import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/HomePage/Home';
import {motion} from 'framer-motion';
import { AuthContextProvider } from './context/AuthContext';
import WorkSpace from './components/WorkSpace/WorkSpace';


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
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/workspace" element={<WorkSpace/>} />
      </Routes>
      </Router>
    </AuthContextProvider>
    </motion.main>
      
  );
}

export default App;

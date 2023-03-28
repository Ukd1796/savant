import React from 'react';
import GlobalStyles from '../../globalStyles';
import { Footer,Navbar} from '../../utils'
import ScrollToTop from '../../utils/ScrollToTop';
import { InfoSection, Pricing } from '../../utils';
import { homeObjOne} from './Data';
import "./Home.css";

const Home = () => {
    return (
        <>
        <GlobalStyles />
          <ScrollToTop />
          <Navbar />
            <InfoSection {...homeObjOne} />
            <Pricing />
            <Footer/>
        </>
    )
}

export default Home;
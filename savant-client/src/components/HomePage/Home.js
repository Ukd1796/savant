import React from 'react';
import { InfoSection, Pricing } from '../../utils';
import { homeObjOne} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Pricing />
        </>
    )
}

export default Home;
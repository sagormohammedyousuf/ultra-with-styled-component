import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

const Product = () => {
    return (
        <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        {/* <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} /> */}
      </>
    );
};

export default Product;
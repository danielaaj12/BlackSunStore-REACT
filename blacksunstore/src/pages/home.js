import React from 'react'; 
import Nav from '../components/Nav';
import Heroimage from '../components/heroimage';
import Heroimage2 from '../components/heroimage2';
import Newarrivals from '../components/newarrivals';
import Data from '../components/data';

export default () => {
    return (
        <div>
            <Nav />
            <Heroimage />
            <Heroimage2 />
            <Newarrivals />
            <Data />
        </div>
    )
}
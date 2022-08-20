import React from 'react';
// import Breakfast from '../Services/Breakfast';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <h2>This is Home </h2>
             <Banner></Banner>
             <Services></Services>
             {/* <Breakfast></Breakfast> */}
        </div>
    );
};

export default Home;
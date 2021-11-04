import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TestMonials from '../TestMonials/TestMonials';
import Treatment from '../Treatment/Treatment';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <AppoinmentBanner></AppoinmentBanner>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;
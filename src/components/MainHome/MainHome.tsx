import React from 'react';
import Footer from './Footer/Footer';
import OurClients from './OurClients/OurClients';
import PricingArea from './PricingArea/PricingArea';

const MainHome = () => {
    return (
        <div>
            <PricingArea />
            <OurClients />
            <Footer />
        </div>
    );
};

export default MainHome;
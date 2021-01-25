import React from 'react';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import CatAndDog from './CatAndDog.jsx';
import Footer from './Footer.jsx';

const Container = () => {
    return (
        <div className= 'Container'>
            CONTENT
            <Header />
            <Nav />
            <CatAndDog />
            <Footer />
        </div>
    );
}

export default Container;
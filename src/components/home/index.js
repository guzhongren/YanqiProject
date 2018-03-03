import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav/NavBar';
import Footer from '../nav/Footer';
import CarouselPlay from './Carousel';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <CarouselPlay/>
      <Footer />
    </div>
  );
};

export default Home;
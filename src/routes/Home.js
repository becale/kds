import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <>
      <HeaderElement />
        <Helmet>
          <title>Home Page</title>
          <meta property="og:title" content="Home Page" />
          <meta property="og:description" content="Welcome to the Home Page of little lemon" />
          <meta property="og:image" content="URL_to_image" />
          <meta property="og:url" content="http://littlelemon.com/" />
        </Helmet>
      <HeroSection />
      <Specials />
      <Footer />
    </>
  )
}

export default Home
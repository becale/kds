import React from 'react';
import HeaderElement from '../components/HeaderElement';
import Footer from '../components/Footer';
import Specials from '../components/Specials';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
    <title>Menu page</title>
    <meta property="og:title" content="Menu" />
    <meta property="og:description" content="Welcome to the Menu Page of little lemon" />
    <meta property="og:image" content="URL_to_image" />
    <meta property="og:url" content="http://littlelemon.com/menu" />
  </Helmet>
      <HeaderElement />
      <h1>Menu Page</h1>
      <Specials />
      <Specials />
      <Footer />
    </div>
  )
}

export default About
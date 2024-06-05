import React from 'react';
import HeaderElement from '../components/HeaderElement';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const Donate = () => {
  return (
    <div>
      <Helmet>
        <title>Donate</title>
        <meta property="og:title" content="Donate" />
        <meta property="og:description" content="Donate page" />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="http://littlelemon.com/donate" />
      </Helmet>
      
      <HeaderElement />

    <h1>Donate</h1>
      <Footer />
    </div>
  )
}

export default Donate
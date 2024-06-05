import React from 'react';
import HeaderElement from '../components/HeaderElement';
import Footer from '../components/Footer';
// import ReservationsPage from '../components/ReservationsPage';
import AboutPage from '../components/AboutPage';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <HeaderElement />
      <Helmet>
        <title>About Us</title>
        <meta property="og:title" content="About Page" />
        <meta property="og:description" content="About Us page" />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="http://littlelemon.com/about" />
      </Helmet>
      {/* <ReservationsPage /> */}
      <AboutPage />
      <Footer />
    </div>
  )
}

export default About
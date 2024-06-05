import React from 'react';
import HeaderElement from '../components/HeaderElement';
import Footer from '../components/Footer';
import ReservationsPage from '../components/ReservationsPage';
import { Helmet } from 'react-helmet';

const Reservations = () => {
  return (
    <div>
      <Helmet>
    <title>Reservations</title>
    <meta property="og:title" content="Reservations" />
    <meta property="og:description" content="Welcome to the Reservations Page of little lemon" />
    <meta property="og:image" content="URL_to_image" />
    <meta property="og:url" content="http://littlelemon.com/reservations" />
  </Helmet>
      <HeaderElement />
      <ReservationsPage />
      <Footer />
    </div>
  )
}

export default Reservations
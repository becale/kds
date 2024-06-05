import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const OrderOnline = () => {
  return (
    <div>
      <Helmet>
    <title>Order Online</title>
    <meta property="og:title" content="order online" />
    <meta property="og:description" content="Welcome to the order Page of little lemon" />
    <meta property="og:image" content="URL_to_image" />
    <meta property="og:url" content="http://littlelemon.com/login" />
  </Helmet>
      <Header />
      <h1 style={{textAlign: "center", paddingTop: "15%"}}>Order Online</h1>
      <Footer />
    </div>
  )
}

export default OrderOnline
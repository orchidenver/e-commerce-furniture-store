import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
import { Helmet } from 'react-helmet';


const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Home page" />
        <title>Comfy Sloth. Home</title>
      </Helmet>
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <Contact />
      </main>
    </>

  );
}

export default HomePage

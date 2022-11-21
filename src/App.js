import React, { useState } from 'react';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import "./App.scss";
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/FAQ'
import Footer from './components/Footer'

import posts from './data/posts';
import AccountModal from './components/AccountModal';

const  App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={() => setShowModal(true)}>
        Abra sua conta
      </CenteredButton>
      <Institutional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}  />
    </div>
  );
}

export default App;


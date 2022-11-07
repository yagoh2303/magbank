import React from 'react';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import "./App.scss";
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/FAQ'

import posts from './data/posts';

const  App = () => (
    <div className="App">
      <Navigation />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional />
      <Faq />
    </div>
  );


export default App;


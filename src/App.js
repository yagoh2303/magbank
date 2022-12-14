import React, { useState } from 'react';
import { Routes , Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';
import "./App.scss";

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard'



const  App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navigation handleCreateAcc={() => setShowModal(true)} />
 
        <Routes>
          <Route path='/' element={<Home handleClick={() => setShowModal(true)} />} />

          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={<Dashboard />} />
               
        </Routes>
       

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}  />
    </>
  );
}

export default App;


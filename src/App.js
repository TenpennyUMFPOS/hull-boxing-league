import React from 'react';
import './App.css';
import MainPage from './components/main-page/main-page';
import Intro from './components/introduction/intro';
import About from './components/about-us/about';
import Location from './components/location/location';
import ContactUs from './components/contact-us/contact-us';
import { Route, Routes } from 'react-router-dom';
import UnderDev from './errors/under-dev';

function App() {
  return (
    <Routes>
      <Route path="/" element={<>
        <MainPage />
        <Intro />
        <About />
        <Location />
        <ContactUs />
      </>}>

      </Route>
      <Route path="/underDev" element={<UnderDev />} />
    </Routes>
  );
}

export default App;

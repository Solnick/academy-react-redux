import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/style.scss';
import style from './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './views/AboutUs/AboutUs';
import Contact from './views/Contact/Contact';
import SkiCams from './views/SkiCams/SkiCams';

const App = () => (
  <div className={style.root}>
    <BrowserRouter>
      <Header />
      <Route
        path="/about-us"
        component={AboutUs}
      />
      <Route
        path="/contact"
        component={Contact}
      />
      <Route
        path="/ski-cams"
        component={SkiCams}
      />
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;

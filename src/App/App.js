import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
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
      <Switch>
        <Redirect from="/" exact to="/about-us" />
        <Route
          path="/about-us"
          component={AboutUs}
          exact
        />
        <Route
          path="/contact"
          component={Contact}
          exact
        />
        <Route
          path="/ski-cams"
          component={SkiCams}
          exact
        />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style/style.scss';
import style from './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={style.root}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;

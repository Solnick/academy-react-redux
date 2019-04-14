import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './header.module.scss';
import Tab from './Tab/Tab';
import pgsLogo from '../../assets/images/pgs-logo.svg';

const tabs = [
  {
    to: '/about-us',
    text: 'about us',
  },
  {
    to: '/ski-cams',
    text: 'skicams',
  },
  {
    to: '/contact',
    text: 'contact',
  },
];

const Header = () => (
  <div className={styles.headerWrapper}>
    <div className={styles.header}>
      <img src={pgsLogo} alt="PGS software logo" />
      <div className={styles.navigation}>
        {
          tabs.map(({ to, text }) => (
            <Tab
              key={to}
              to={to}
              text={text}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default withRouter(Header);

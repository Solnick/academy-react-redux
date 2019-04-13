import React, { useState } from 'react';

import styles from './header.module.scss';
import Tab from './Tab/Tab';
import pgsLogo from '../../assets/images/pgs-logo.svg';

const Header = () => {
  const [tabs] = useState([
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
  ]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <img src={pgsLogo} alt="pgs-software-logo" />
        <div className={styles.navigation}>
          {
            tabs.map(tab => <Tab key={tab.to} {...tab} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

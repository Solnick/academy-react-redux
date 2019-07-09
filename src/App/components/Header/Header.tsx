import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './header.module.scss';
import Tab from './Tab/Tab';
import reactLogo from '../../assets/images/react-logo.svg';

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

const Header = ({ location }) => {
  const isActive = destination => location.pathname === destination;
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <img src={reactLogo} alt="react software logo" />
        <div className={styles.navigation}>
          {
            tabs.map(({ to, text }) => (
              <Tab
                key={to}
                to={to}
                text={text}
                isActive={isActive(to)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);

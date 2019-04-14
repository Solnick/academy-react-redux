import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';

const Tab = ({ text, to }) => {
  const isActive = destination => window.location.href.endsWith(destination);
  return (
    <Link to={to} className={`${styles.tab} ${isActive(to) ? styles.activeTab : ''}`}>
      <p>{text}</p>
    </Link>
  );
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Tab;

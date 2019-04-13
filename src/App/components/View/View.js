import React from 'react';
import PropTypes from 'prop-types';
import styles from './view.module.scss';

const View = ({ children }) => (
  <div className={styles.view}>
    {children}
  </div>
);

View.propTypes = {
  children: PropTypes.node.isRequired,
};

export default View;

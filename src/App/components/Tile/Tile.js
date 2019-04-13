import React from 'react';
import PropTypes from 'prop-types';
import styles from './tile.module.scss';

const Tile = ({ children }) => (
  <div className={styles.container}>
    { children }
  </div>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tile;

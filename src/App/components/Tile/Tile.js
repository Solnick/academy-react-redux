import React from 'react';
import PropTypes from 'prop-types';
import styles from './tile.module.scss';

const Tile = ({ children, center }) => (
  <div className={`${styles.container} ${center ? styles.center : ''}`}>
    { children }
  </div>
);

Tile.defaultProps = {
  center: false,
};

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

export default Tile;

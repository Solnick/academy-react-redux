import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../../../components/Tile/Tile';
import styles from './infoBox.module.scss';

const InfoBox = ({ text, title, img }) => (
  <Tile>
    <div className={styles.infoBoxWrapper}>
      <img src={img} alt={title} />
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  </Tile>
);

InfoBox.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default InfoBox;

import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../../../components/Tile/Tile';

const SkiResortDetails = (props) => {
  const { name, cams } = props;
  const camsArray = Object.values(cams).slice(0, 2);

  return (
    <Tile>
      <h2>{name}</h2>
      {
        camsArray.map(cam => <img src={cam.url} key={cam.name} alt={cam.name} />)
      }
    </Tile>
  );
};

SkiResortDetails.propTypes = {
  name: PropTypes.string.isRequired,
  cams: PropTypes.object.isRequired,
};

export default SkiResortDetails;

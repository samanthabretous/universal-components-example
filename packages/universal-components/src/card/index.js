import React from 'react';
import propTypes from 'prop-types';

import CardTile from './data';
import NoData from './no-data';

export const cardState = ({ image, subtitle, title }) => {
  if (image) {
    return 'data';
  }
  return 'no-data';
};

const Card = props => {
  switch (cardState(props)) {
    case 'data':
      return <CardTile {...props} />;
    case 'no-data':
      return <NoData {...props} />;
    default:
      console.warn('Card missing: props');
      return <NoData {...props} />;
  }
};

Card.propTypes = {
  image: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Card;

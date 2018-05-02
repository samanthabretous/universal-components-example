import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';

import Card from 'uc-example-react-eu';

const title = 'Example Card';
const subtitle = 'Rendered using react-primitives';
const image = { uri: 'https://source.unsplash.com/random' };

const Document = () => (
  <Artboard
    name="ExampleCard"
    style={{
      padding: 16,
      width: (96 + 8) * 4,
    }}
  >
    <Card title={title} subtitle={subtitle} image={image} />
  </Artboard>
);

export default () => {
  render(<Document />, context.document.currentPage());
};

import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';

import { Card } from 'uc-example-react-eu';

const Document = () => (
  <Artboard
    name="ExampleCard"
    style={{
      padding: 16,
      width: (96 + 8) * 4,
    }}
  >
    <Card
      image={{ uri: 'https://source.unsplash.com/random' }}
      subtitle="Rendered using react-primitives"
      title="Example Card"
      style={{ borderColor: '#eeeeee', borderWidth: 1 }}
    />
  </Artboard>
);

export default () => {
  render(<Document />, context.document.currentPage());
};

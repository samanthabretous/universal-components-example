import React from 'react';
import Card from 'uc-example-react-eu';

export default () => (
  <Card
    image={{ uri: 'https://source.unsplash.com/random' }}
    subtitle="Rendered using react-primitives"
    title="Example Card"
    style={{ borderColor: '#eeeeee', borderWidth: 1 }}
  />
);

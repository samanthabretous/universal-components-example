import React from 'react';
import Card from 'uc-example-react-eu';

const title = 'Example Card';
const subtitle = 'Rendered using react-primitives';
const image = { uri: 'https://source.unsplash.com/random' };

export default () => <Card title={title} subtitle={subtitle} image={image} />;

import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../src';

storiesOf('Card', module).add('example', () => (
  <div style={{ padding: 16 }}>
    <Card
      image={{ uri: 'https://source.unsplash.com/random' }}
      subtitle="Rendered using react-primitives"
      title="Example Card"
      style={{ borderColor: '#eeeeee', borderWidth: 1 }}
    />
  </div>
));

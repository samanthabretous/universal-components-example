import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Card', module).add(
  'Example',
  withInfo({
    inline: true,
  })(() => (
    <div style={{ padding: 16 }}>
      <Card
        image={{ uri: 'https://source.unsplash.com/random' }}
        subtitle="Rendered using react-primitives"
        title="Example Card"
        style={{ borderColor: '#eeeeee', borderWidth: 1 }}
      />
    </div>
  ))
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../index';

storiesOf('Card', module)
  .add('No Data', () => (
    <div style={{ padding: 16 }}>
      <Card />
    </div>
  ))
  .add('With Data', () => (
    <div style={{ padding: 16 }}>
      <Card
        image={{ uri: 'https://source.unsplash.com/random' }}
        subtitle="Rendered using react-primitives"
        title="Example Card"
      />
    </div>
  ))
  .add('With Custom Styles', () => (
    <Card
      image={{ uri: 'https://source.unsplash.com/random' }}
      subtitle="Rendered using react-primitives"
      title="Example Card"
      style={{ margin: 16 }}
    />
  ));

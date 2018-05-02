import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from '../src';

const title = 'Example Card';
const subtitle = 'Rendered using react-primitives';
const image = { uri: 'https://source.unsplash.com/random' };

storiesOf('Card', module).add('example', () => (
  <Card title={title} subtitle={subtitle} image={image} />
));

import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Header from '../index';

storiesOf('Header', module).add(
  'example',
  withInfo({
    inline: true,
  })(() => (
    <div style={{ padding: 16 }}>
      <Header
        subtitle="It's great to see all of you"
        title="Hello, React Europe"
        style={{ borderColor: '#eeeeee', borderWidth: 1 }}
      />
    </div>
  ))
);

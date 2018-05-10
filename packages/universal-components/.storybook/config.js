import { addDecorator, configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context(
  '../src/', // path where stories live
  true, // recursive?
  /\__stories__\/.*.stories.js$/ // story files match this pattern
);

function loadStories() {
  req.keys().forEach(module => req(module));
}

configure(loadStories, module);

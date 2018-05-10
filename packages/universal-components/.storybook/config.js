import { addDecorator, configure } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';

addDecorator((story, context) => withInfo(``)(story)(context));
setDefaults({
  inline: true,
  header: false,
});

// automatically import all files ending in *.stories.js
const req = require.context(
  '../src/', // path where stories live
  true, // recursive?
  /\__stories__\/.*.stories.js$/, // story files match this pattern
);

function loadStories() {
  req.keys().forEach(module => req(module));
}

configure(loadStories, module);

import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from 'storybook-addon-info';
import theme from '../../../config/theme';

addDecorator(withInfo);

addParameters({
  options: {
    theme: theme,
    panelPosition: 'right',
  },
});

const loadStories = () => {
  // automatically import all files ending in *.stories.js
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

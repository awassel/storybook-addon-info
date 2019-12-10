import { storiesOf } from '@storybook/html';
import button from './button.html';
import info from '!!raw-loader!./README.md';

storiesOf('Button', module)
  .add('Default', 
  () => button,
  {
    info: info,
  }
);
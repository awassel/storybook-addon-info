import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';
import info from '!!raw-loader!./README.md';

storiesOf('Button', module).add(
  'Default',
  () => {
    return <Button>Hello Button</Button>
  },
  {
    info: info,
  }
);

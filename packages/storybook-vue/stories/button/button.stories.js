import { storiesOf } from '@storybook/vue';
import Button from './button';
import info from '!!raw-loader!./README.md';

storiesOf('Button', module)
    .add('Default', () => ({
        components: { Button },
        template: '<button>Hello Button</button>'
    }), 
    {
        info: info,
    });
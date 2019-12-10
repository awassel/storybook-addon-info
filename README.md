# Storybook Addon Info

An addon to [Storybook](https://storybook.js.org/) that allows for display of Markdown files.

[Framework Support](https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md)

![Screenshot](https://github.com/awassel/storybook-addon-info/raw/master/docs/screenshot.png)

## Why

In building out component libraries, there may arise a need to display functional requirements for each component. This addon will allow you to pass in a Markdown file and display it within the the addons area/.

## Getting Started

Install:

```sh
npm i -D storybook-addon-info
```

Then, add following content to `.storybook/addons.js`

```js
import 'storybook-addon-info/register';
```

In the `.storybook/config.js` file, import the `withCode` decorator.

```js
import { withInfo } from 'storybook-addon-info';

addDecorator(withInfo);
```

Now, you can use the `info` parameter to add a note to each story. This parameter accepts a raw version of a Markdown file. 

`raw-loader` is installed with this package in order to load the file contents as a string.

> **Note:** Using a `!!` before a request will disable all loaders specified in the configuration. This will allow for the contents to be passed as a string.

```jsx
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
```

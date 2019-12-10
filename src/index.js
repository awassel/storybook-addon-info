import addons, { makeDecorator } from '@storybook/addons';
import { CHANNEL_ID } from './constants';

const withInfo = makeDecorator({
  name: 'withInfo',
  parameterName: 'info',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const storyOptions = parameters || options;
    channel.emit(CHANNEL_ID, storyOptions);
    return getStory(context);
  },
});

export { withInfo };

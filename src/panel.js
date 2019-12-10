import React from 'react';
import Markdown from 'markdown-it';
import { CHANNEL_ID } from './constants';
import { styled } from '@storybook/theming';
import { STORY_CHANGED } from '@storybook/core-events';
import styles from './styles';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onStoryChange = this.onStoryChange.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    this.mounted = true;
    channel.on(CHANNEL_ID, this.onStoryChange);

    this.stopListeningOnStory = api.on(STORY_CHANGED, () => {
      if (!this.mounted) {
        this.onStoryChange('');
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;

    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    channel.removeListener(CHANNEL_ID, this.onStoryChange);
  }

  onStoryChange(value) {
    if (value) {
      this.setState({ value: value.toString() });
    } else {
      this.setState({ value: undefined });
    }
  }

  render() {
    const { active } = this.props;

    const { value } = this.state;

    const Panel = styled.div(styles);

    const md = new Markdown({
      html: true,
    });

    return active ? (
      <Panel>
        {value && (
          <div dangerouslySetInnerHTML={{ __html: md.render(value) }} />
        )}
      </Panel>
    ) : null;
  }
}

export default Panel;

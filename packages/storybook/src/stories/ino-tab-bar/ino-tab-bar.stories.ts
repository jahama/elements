import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-tab-bar.scss';

const eventHandler = (e) => e.target.setAttribute('active-tab', e.detail);

export default {
  title: `Structure/ino-tab-bar`,
  component: 'ino-tab-bar',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-tab-bar'),
    (story) => {
      useEffect(() => {
        const tabBars = document.querySelectorAll('ino-tab-bar');
        tabBars.forEach((t) =>
          t.addEventListener('activeTabChange', eventHandler)
        );
        return () =>
          tabBars.forEach((t) =>
            t.removeEventListener('activeTabChange', eventHandler)
          );
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoTabBar> = (args) => html`
  <ino-tab-bar id="customizable-tabbar" active-tab="${args.activeTab}" auto-focus="${args.autoFocus}">
    <ino-tab label="User" icon="user"></ino-tab>
    <ino-tab label="Messages" icon="message"></ino-tab>
    <ino-tab label="Settings" icon="settings"></ino-tab>
    <ino-tab label="Download" icon="download"></ino-tab>
  </ino-tab-bar>
`;
Playground.args = {
  activeTab: 0,
  autoFocus: false,
};
Playground.argTypes = {
  activeTab: {
    control: {
      type: 'select',
    },
    options: [0, 1, 2, 3],
  },
};

export const Stacked = () => html`
  <ino-tab-bar>
    <ino-tab label="Label 1" icon="info" stacked></ino-tab>
    <ino-tab label="Label 2" icon="info" stacked></ino-tab>
    <ino-tab label="Label 3" icon="info" stacked></ino-tab>
    <ino-tab label="Label 4" icon="info" stacked></ino-tab>
  </ino-tab-bar>
`;

export const IndicatorContentWidth = () => html`
  <ino-tab-bar>
    <ino-tab label="Label 1" icon="info" indicator-content-width></ino-tab>
    <ino-tab label="Label 2" icon="info" indicator-content-width></ino-tab>
    <ino-tab label="Label 3" icon="info" indicator-content-width></ino-tab>
    <ino-tab label="Label 4" icon="info" indicator-content-width></ino-tab>
  </ino-tab-bar>
`;

// Button.stories.js
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  args: { children: 'Button' },
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Button,
} as Meta;

export const Default: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} />
);

export const Primary: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} variant="primary" />
);

export const Secondary: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} variant="secondary" />
);

export const Tertiary: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} variant="tertiary" />
);

export const Positive: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} variant="positive" />
);

export const Negative: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} variant="negative" />
);

export const FullWidth: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} isFullWidth />
);

export const Small: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} size="small" />
);

export const Large: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} size="large" />
);

export const Pill: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} shape="pill" />
);

export const Round: Story<ButtonProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
  <Button {...args} shape="round" />
);

// export const WithIcon: Story<ButtonElementProps> = (args: JSX.IntrinsicAttributes & React.PropsWithChildren<ButtonProps>) => (
//   <Button {...args} startIcon="copy" />
// );

// export const OnlyIcon: Story<ButtonProps> = () => (
//   <Button startIcon="copy" iconLabel="copy" />
// );

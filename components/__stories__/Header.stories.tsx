import { Meta } from '@storybook/react';
import { ExampleHeader } from '@components/Header';

const meta: Meta = {
  title: 'Components/Example Header',
  component: ExampleHeader,
  argTypes: {},
};
export default meta;

export const Default: React.VFC = () => {
  return <ExampleHeader />;
};

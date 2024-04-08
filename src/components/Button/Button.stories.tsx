import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Component/Button",
  component: Button,
  args: {
    rounded: true,
    style: "filled",
    children: "テキスト",
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Base: Story = {};

export const Outlined: Story = {
  args: {
    style: "outlined",
  },
};

export const NotRound: Story = {
  args: {
    rounded: false,
  },
};

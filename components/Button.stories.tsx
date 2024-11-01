import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { MyButton } from "./Button";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "Hello world",
    onPress: action("onPress"),
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

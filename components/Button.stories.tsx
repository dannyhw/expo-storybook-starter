import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { MyButton } from "./Button";

const MyButtonMeta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type MyButtonStory = StoryObj<typeof MyButton>;

export const Basic: MyButtonStory = {};

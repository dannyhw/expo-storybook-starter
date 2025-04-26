import { StorybookConfig } from "@storybook/react-native-web-vite";

const main: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },
};

export default main;

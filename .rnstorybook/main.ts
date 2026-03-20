import type { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
  features: {
    ondeviceBackgrounds: true,
  },
};

export default main;

const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
  withStorybookConfig,
} = require("@storybook/react-native/metro/withStorybookConfig");

module.exports = withStorybookConfig(defaultConfig, {
  removeStorybook: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED !== "true",
});

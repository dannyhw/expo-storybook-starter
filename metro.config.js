const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
  withStorybook,
} = require("@storybook/react-native/withStorybook");

module.exports = withStorybook(defaultConfig );

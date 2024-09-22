const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform
  );

  if (
    process.env.STORYBOOK_ENABLED !== "true" &&
    defaultResolveResult?.filePath?.includes?.(".ondevice/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

const withStorybook = require("@storybook/react-native/metro/withStorybook");

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.ondevice"),
});

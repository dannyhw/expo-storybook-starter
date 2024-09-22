/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    "@storybook/addon-react-native-web",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

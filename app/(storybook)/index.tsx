let StorybookUI = () => <></>;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  StorybookUI = require("../../.rnstorybook").default;
}

export default StorybookUI;

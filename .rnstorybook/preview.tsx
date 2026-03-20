import type { Preview } from "@storybook/react-native";
import { Appearance, Platform } from "react-native";

// fix for actions on web
if (Platform.OS === "web") {
  // @ts-ignore
  global.ProgressTransitionRegister = {};
  // @ts-ignore
  global.UpdatePropsManager = {};
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "dark", value: "#333" },
        light: { name: "plain", value: "#fff" },
        // 👇 Add your own
        app: { name: "app", value: "#eeeeee" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: {
      value: Appearance.getColorScheme() === "dark" ? "dark" : "plain",
    },
  },
};

export default preview;

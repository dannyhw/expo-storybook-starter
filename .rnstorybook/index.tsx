import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";
import { registerRootComponent } from "expo";
import { LiteUI } from "@storybook/react-native-ui-lite";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  CustomUIComponent: LiteUI,
});

registerRootComponent(StorybookUIRoot);

import React from "react";
import StorybookUIRoot from "./.ondevice/Storybook";
import { Platform, StatusBar, View } from "react-native";

export default () => (
  <View
    style={{
      flex: 1,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}
  >
    <StorybookUIRoot />
  </View>
);

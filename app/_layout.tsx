import { Stack } from "expo-router";

const StorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export const unstable_settings = {
  initialRouteName: StorybookEnabled ? "(storybook)/index" : "(pages)/index",
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={StorybookEnabled}>
        <Stack.Screen name="(storybook)/index" />
      </Stack.Protected>

      <Stack.Screen name="(pages)/index" />
    </Stack>
  );
}

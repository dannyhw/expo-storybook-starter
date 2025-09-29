import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true" ? (
        <Link href="/(storybook)">Open Storybook</Link>
      ) : (
        <Text>Hello World (storybook disabled)</Text>
      )}
    </View>
  );
}

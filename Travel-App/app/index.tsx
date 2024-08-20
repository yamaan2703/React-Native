import { Text, View } from "react-native";
import AuthLayout from "./(auth)/_layout";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthLayout />
    </View>
  );
}

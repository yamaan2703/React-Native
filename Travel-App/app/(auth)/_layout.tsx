import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="onboad-1" />
      <Stack.Screen name="onboad-2" />
    </Stack>
  );
}

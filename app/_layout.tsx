// Import necessary modules
import { Stack } from "expo-router";

// Root layout component
export default function RootLayout() {
  return (
    <Stack screenOptions={{ 
      headerShown: false 
    }} />
  );
}

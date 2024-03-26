import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StyleSheet, View, Text } from "react-native";

export default function HomeLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading font...</Text>
      </View>
    ); // Render some loading text or a loading spinner while the fonts are loading
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

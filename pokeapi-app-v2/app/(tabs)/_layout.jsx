import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Buscar",
          headerShown: false,

          tabBarIcon: () => (
            <FontAwesome name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="all"
        options={{
          title: "Todos",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="catching-pokemon" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}

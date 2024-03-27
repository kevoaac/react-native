import { View, TouchableOpacity } from "react-native";
import React from "react";
import theme from "../util/theme";

export default function ColorPicker({ selectedColor, setSelectedColor }) {
  const { colorList } = theme.colors;
  return (
    <View style={{ flexDirection: "row", gap: 20, alignSelf: "center" }}>
      {colorList.map((color, index) => (
        <TouchableOpacity
          onPress={() => setSelectedColor(color)}
          key={index}
          style={[
            {
              backgroundColor: color,
              width: 40,
              height: 40,
              borderRadius: 99,
            },
            selectedColor === color && { borderWidth: 3 },
          ]}
        ></TouchableOpacity>
      ))}
    </View>
  );
}

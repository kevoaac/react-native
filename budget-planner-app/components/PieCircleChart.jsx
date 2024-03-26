import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import PieChart from "react-native-pie-chart";
import theme from "../util/theme";
import StyledText from "./styledComponents/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { gray, white, primary, secondary } = theme.colors;

export default function PieCircleChart() {
  const widthAndHeight = 150;
  const [values, setValues] = useState([4, 5]); // [0, 0, 0, 0, 0
  const [sliceColor, setSliceColor] = useState([secondary, primary]); // ["#f00", "#0f0", "#00f", "#ff0", "#0ff"
  return (
    <View style={styles.container}>
      <StyledText xl2>
        Total Estimado:{" "}
        <StyledText bold xl2>
          2000$
        </StyledText>
      </StyledText>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={values}
          sliceColor={sliceColor}
          coverRadius={0.6}
          coverFill={white}
        />
        {/* marginRight: 25 -> gap: 5 + paddingHorizontal: 20 */}
        <View style={{ flex: 1, marginRight: 25, gap: 5 }}>
          <Tag color={primary} text={"Sala"} />
          <Tag color={secondary} text={"Cuarto de baño"} />
        </View>
      </View>
    </View>
  );
}

function Tag({ color, text }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <MaterialCommunityIcons
        name="checkbox-blank-circle"
        size={30}
        color={color}
      />
      <Text style={{ fontFamily: "Poppins" }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    marginTop: -60,
    gap: 10,
  },
});

import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import theme from "../../util/theme";

export default function StyledButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <StyledText primary center bold>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 5,
    margin: 20,
    borderRadius: 50,
  },
});

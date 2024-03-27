import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import theme from "../../util/theme";

const { primary, secondary, accent, white, black } = theme.colors;

const styles = StyleSheet.create({
  button: {
    backgroundColor: white,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonCenter: {
    alignSelf: "center",
  },
  buttonStart: {
    alignSelf: "flex-start",
  },
  buttonEnd: {
    alignSelf: "flex-end",
  },
  backgroundPrimary: {
    backgroundColor: primary,
  },
  backgroundSecondary: {
    backgroundColor: secondary,
  },
  backgroundAccent: {
    backgroundColor: accent,
  },
  backgroundWhite: {
    backgroundColor: white,
  },
  backgroundBlack: {
    backgroundColor: black,
  },

  roundedSm: {
    borderRadius: 4,
  },
  rounded: {
    borderRadius: 8,
  },
  roundedMd: {
    borderRadius: 12,
  },
  roundedLg: {
    borderRadius: 16,
  },
  roundedXl: {
    borderRadius: 20,
  },

  roundedFull: {
    borderRadius: 99,
  },
});

export default function StyledButton({
  title,
  disabled,
  onPress,
  start,
  center,
  end,
  bold,
  textPrimary,
  textSecondary,
  textWhite,
  textBlack,
  primary,
  secondary,
  accent,
  white,
  black,
  roundedSm,
  rounded,
  roundedMd,
  roundedLg,
  roundedXl,
  roundedFull,
  style,
}) {
  const buttonStyles = [
    styles.button,
    start && styles.buttonStart,
    center && styles.buttonCenter,
    end && styles.buttonEnd,
    primary && styles.backgroundPrimary,
    secondary && styles.backgroundSecondary,
    accent && styles.backgroundAccent,
    white && styles.backgroundWhite,
    black && styles.backgroundBlack,
    roundedSm && styles.roundedSm,
    rounded && styles.rounded,
    roundedMd && styles.roundedMd,
    roundedLg && styles.roundedLg,
    roundedXl && styles.roundedXl,
    roundedFull && styles.roundedFull,
    style,
  ];
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    >
      <StyledText
        center
        bold={bold}
        primary={textPrimary}
        secondary={textSecondary}
        white={textWhite}
        black={textBlack}
      >
        {title}
      </StyledText>
    </TouchableOpacity>
  );
}

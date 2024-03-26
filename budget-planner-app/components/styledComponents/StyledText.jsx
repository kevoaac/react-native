import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../../util/theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.black,
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.regular,
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textPretty: {
    textPretty: "pretty",
  },
  textBalance: {
    textBalance: "balance",
  },
  fontSmall: {
    fontSize: theme.fontSizes.sm,
  },
  fontLarge: {
    fontSize: theme.fontSizes.lg,
  },
  fontExtraLarge: {
    fontSize: theme.fontSizes.xl,
  },
  fontExtraLarge2: {
    fontSize: theme.fontSizes.xl2,
  },
  fontExtraLarge3: {
    fontSize: theme.fontSizes.xl3,
  },
  fontExtraLarge4: {
    fontSize: theme.fontSizes.xl4,
  },
  bold: {
    fontFamily: theme.fontFamily.bold,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
  colorAccent: {
    color: theme.colors.accent,
  },
  colorWhite: {
    color: theme.colors.white,
  },
});

export default function StyledText({
  children,
  center,
  right,
  sm,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  bold,
  primary,
  secondary,
  accent,
  white,
  style,
}) {
  const textStyles = [
    styles.text,
    center && styles.textCenter,
    right && styles.textRight,
    sm && styles.fontSmall,
    lg && styles.fontLarge,
    xl && styles.fontExtraLarge,
    xl2 && styles.fontExtraLarge2,
    xl3 && styles.fontExtraLarge3,
    xl4 && styles.fontExtraLarge4,
    bold && styles.bold,
    primary && styles.colorPrimary,
    secondary && styles.colorSecondary,
    accent && styles.colorAccent,
    white && styles.colorWhite,
    style,
  ];

  return <Text style={textStyles}>{children}</Text>;
}

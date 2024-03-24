import { View, Text } from "react-native";
import React from "react";
import StyledText from "../../components/styledComponents/StyledText";
import Constants from "expo-constants";
export default function Profile() {
  return (
    <View style={[{ marginTop: Constants.statusBarHeight }]}>
      <StyledText xl3 center bold>
        Profile
      </StyledText>
    </View>
  );
}

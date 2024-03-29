import { View } from "react-native";
import React from "react";
import StyledText from "../../components/styledComponents/StyledText";
import Constants from "expo-constants";
import { client } from "../../util/kindeConfig";
import { useRouter } from "expo-router";
import StyledButton from "../../components/styledComponents/StyledButton";
import { storeData } from "../../services/storage";
export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      // User was logged out
      await storeData("login", "false");
      router.replace("/login");
    }
  };
  return (
    <View style={[{ marginTop: Constants.statusBarHeight }]}>
      <StyledText xl3 center bold>
        Profile
      </StyledText>
      <StyledButton
        title="Log out"
        onPress={handleLogout}
        accent
        roundedLg
        textWhite
        bold
        style={{ marginHorizontal: 20 }}
      ></StyledButton>
      <StyledButton title={"Boton"} primary center />
    </View>
  );
}

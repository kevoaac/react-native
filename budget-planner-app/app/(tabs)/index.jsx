import { View, StyleSheet } from "react-native";
import { useEffect } from "react";
import StyledText from "../../components/styledComponents/StyledText";
import StyledButton from "../../components/styledComponents/StyledButton";
import Constants from "expo-constants";
import { getData, storeData } from "../../services/storage";
import { client } from "../../util/kindeConfig";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    const result = await getData("login");
    if (result !== "true") router.replace("/login");
  };

  const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      // User was logged out
      await storeData("login", "false");
      router.replace("/login");
    }
  };
  return (
    <View style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <StyledText xl3 center bold>
        Home
      </StyledText>
      <StyledButton title="Log out" onPress={handleLogout}></StyledButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "red",
    fontSize: 30,
  },
});

import { View, Image, StyleSheet } from "react-native";
import React from "react";
import loginbg from "../../assets/images/loginbg.png";
import Constants from "expo-constants";
import theme from "../../util/theme";
import StyledText from "../../components/styledComponents/StyledText";
import StyledButton from "../../components/styledComponents/StyledButton";
import { storeData } from "../../services/storage";
import { client } from "../../util/kindeConfig";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      await storeData("login", "true");
      router.replace("/");
    }
  };

  return (
    <View style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <Image source={loginbg} style={styles.image} />
      <View style={styles.loginContainer}>
        <StyledText xl3 bold white center style={{ marginVertical: 20 }}>
          Planea tus gastos personales
        </StyledText>
        <StyledText lg white center style={{ marginHorizontal: 20 }}>
          Manten un control. Tu aplicación personal de planificación de gastos.
        </StyledText>
        <StyledButton title="Log in/ Sign in" onPress={handleSignIn} />
        <StyledText white center sm>
          Al iniciar sesión usted acepta los terminos y condiciones
        </StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 330,
    alignSelf: "center",
    marginTop: 40,
  },
  loginContainer: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
});

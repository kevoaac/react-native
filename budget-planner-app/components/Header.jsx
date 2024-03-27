import { View, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import theme from "../util/theme";
import StyledText from "./styledComponents/StyledText";
import { client } from "../util/kindeConfig";

export default function Header() {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const user = await client.getUserDetails();

    setUserData({
      name: user.given_name,
      picture: user.picture,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.header}>
      {userData && (
        <Image source={{ uri: userData.picture }} style={styles.image} />
      )}
      <View>
        <StyledText bold white lg>
          Bienvenido {userData.name}
        </StyledText>
        <StyledText white sm>
          {2000}$
        </StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    paddingTop: 20,
    paddingBottom: 80,
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 99,
    marginLeft: 20,
  },
});

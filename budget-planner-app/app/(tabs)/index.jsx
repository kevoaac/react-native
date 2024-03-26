import { View, StyleSheet, Text } from "react-native";
import { useEffect } from "react";
import StyledText from "../../components/styledComponents/StyledText";
import StyledButton from "../../components/styledComponents/StyledButton";
import Constants from "expo-constants";
import { getData, storeData } from "../../services/storage";
import { client } from "../../util/kindeConfig";
import { useRouter } from "expo-router";
import { supabase } from "../../util/supabaseConfig";
import Header from "../../components/Header";
import theme from "../../util/theme";
import PieCircleChart from "../../components/PieCircleChart";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    const result = await getData("login");
    if (result !== "true") router.replace("/login");
  };

  const getCategoryList = async () => {
    const user = await client.getUserDetails();

    const categories = await supabase
      .from("Category")
      .select("*")
      .eq("created_by", user.email);

    console.log(categories.data);
  };
  return (
    <View style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <Header />
      <PieCircleChart />
      <StyledText
        xl2
        bold
        style={{
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        Último gasto
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  text: {
    color: "red",
    fontSize: 30,
  },
});

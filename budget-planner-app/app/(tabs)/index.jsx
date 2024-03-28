import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useEffect } from "react";
import StyledText from "../../components/styledComponents/StyledText";
import Constants from "expo-constants";
import { getData } from "../../services/storage";
import { Link, useRouter } from "expo-router";
import Header from "../../components/Header";
import theme from "../../util/theme";
import PieCircleChart from "../../components/PieCircleChart";
import { Ionicons } from "@expo/vector-icons";
import { useCategoryList } from "../../hooks/useCategoryList";
import CategoryList from "../../components/CategoryList";

export default function Home() {
  const { categories, loading, getCategoryList } = useCategoryList();
  const router = useRouter();

  useEffect(() => {
    checkUserAuth();
    getCategoryList();
  }, []);

  const checkUserAuth = async () => {
    const result = await getData("login");
    if (result !== "true") router.replace("/login");
  };

  return (
    <View style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <ScrollView
        onEn
        refreshControl={
          <RefreshControl
            onRefresh={() => getCategoryList()}
            refreshing={loading}
          />
        }
      >
        <Header />
        <PieCircleChart />
        <StyledText xl2 bold style={{ marginLeft: 20 }}>
          Último gasto
        </StyledText>

        <CategoryList list={categories} />
      </ScrollView>
      <Link style={styles.addButton} href={"/add-new-category"}>
        <Ionicons name="add-circle" size={64} color={theme.colors.primary} />
      </Link>
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
  addButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
});

import { View, FlatList, StyleSheet } from "react-native";
import StyledText from "./styledComponents/StyledText";
import { useCallback } from "react";

export default function CategoryList({ list }) {
  const renderItem = useCallback(
    ({ item }) => <CategoryItem item={item} />,
    []
  );
  return (
    <FlatList
      scrollEnabled={false}
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 10 }}
      style={{ marginHorizontal: 20 }}
    />
  );
}

function CategoryItem({ item }) {
  const { CategoryItem, name, icon, color, assigned_budget } = item;
  const numberOfItems = CategoryItem.length;
  const hasOneItem = numberOfItems === 1 ? true : false;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconTextsContainer}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <StyledText xl4>{icon}</StyledText>
        </View>

        <View>
          <StyledText bold lg>
            {name}
          </StyledText>
          <StyledText>
            {`${numberOfItems} ${hasOneItem ? "item" : "items"}`}
          </StyledText>
        </View>
      </View>

      <StyledText bold lg style={{ marginRight: 4 }}>
        ${assigned_budget}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    backgroundColor: "white",
  },
  iconTextsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  iconContainer: {
    aspectRatio: 1,
    width: 72,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

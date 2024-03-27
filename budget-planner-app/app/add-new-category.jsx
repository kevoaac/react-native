import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import StyledText from "../components/styledComponents/StyledText";
import theme from "../util/theme";
import ColorPicker from "../components/ColorPicker";
import { MaterialIcons } from "@expo/vector-icons";
import StyledButton from "../components/styledComponents/StyledButton";
import { supabase } from "../util/supabaseConfig";
import { getData } from "../services/storage";
import { client } from "../util/kindeConfig";

const { colorList, white, darkGray } = theme.colors;

export default function AddNewCategory() {
  const [selectedIcon, setSelectedIcon] = useState("💖");
  const [selectedColor, setSelectedColor] = useState(colorList[2]);
  const [categoryName, setCategoryName] = useState("");
  const [budget, setBudget] = useState(0);

  const getUserData = async () => {
    return await client.getUserDetails();
  };

  const onAddCategory = async () => {
    const { email } = await getUserData();

    const { data, error } = await supabase
      .from("Category")
      .insert([
        {
          created_by: email,
          name: categoryName,
          icon: selectedIcon,
          color: selectedColor,
          assigned_budget: budget,
        },
      ])
      .select();
    if (error) {
      console.log("error", error);
    } else {
      console.log("data", data);
      ToastAndroid.show("Categoría añadida", ToastAndroid.SHORT);
    }
  };
  return (
    <View style={[styles.constainer, { marginTop: Constants.statusBarHeight }]}>
      <StyledText xl2 bold center style={{ marginVertical: 20 }}>
        Añade una categoría
      </StyledText>
      <View style={[styles.iconContainer, { backgroundColor: selectedColor }]}>
        <TextInput
          style={{ fontSize: 40 }}
          maxLength={2}
          onChangeText={(icon) => {
            setSelectedIcon(icon);
            console.log(icon);
          }}
        >
          {selectedIcon}
        </TextInput>
      </View>
      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <View>
        <View style={styles.input}>
          <MaterialIcons name="local-offer" size={24} color={darkGray} />
          <TextInput
            style={{ width: "100%" }}
            placeholder="Nombre de la categoría"
            onChangeText={(text) => setCategoryName(text)}
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons name="monetization-on" size={24} color={darkGray} />
          <TextInput
            style={{ width: "100%" }}
            keyboardType="numeric"
            placeholder="Presupuesto de total"
            onChangeText={(text) => setBudget(text)}
          />
        </View>
        <StyledButton
          disabled={!(categoryName && budget)}
          onPress={onAddCategory}
          title="Añadir categoría"
          center
          bold
          primary
          textWhite
          roundedLg
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: white,
  },
  iconContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 80,
    height: 80,
    borderRadius: 99,
    marginVertical: 20,
  },

  input: {
    flexDirection: "row",
    width: "70%",
    gap: 10,
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: darkGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

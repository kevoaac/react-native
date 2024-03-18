import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({ title, titleChange, isActive, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: "#f2f2f2", fontSize: 20, fontWeight: "bold" }}>
        {isActive ? title : titleChange}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    padding: 10,
    marginHorizontal: 60,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
});

export default Button;

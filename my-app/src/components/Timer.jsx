import { StyleSheet, Text, View } from "react-native";

export default function Timer({ time }) {
  const formatedTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatedTime(time)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#333333",
  },
});

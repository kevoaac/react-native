import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const options = ["Pomodoro", "Short Breack", "Long breack"];
const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2"];

export default function Header({
  title,
  currentTime,
  setCurrentTime,
  setTime,
}) {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.navBar}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={[
              styles.touchable,
              currentTime === index && {
                // borderBottomWidth: 0.5,
                backgroundColor: colors[index],
              },
            ]}
          >
            <Text
              key={option}
              style={
                currentTime === index && {
                  fontWeight: "bold",
                  // color: "#1e85be",
                }
              }
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  navBar: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },
  touchable: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    borderTopWidth: 0.2,
  },
});

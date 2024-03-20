import { Text, View } from "react-native";

function PokeHeader({ style, title, titleColor }) {
  return (
    <View style={style}>
      <Text
        style={{ color: titleColor }}
        className="text-3xl text-center my-1 font-bold"
      >
        {title}
      </Text>
    </View>
  );
}

export default PokeHeader;

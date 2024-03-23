import { Image, View } from "react-native";

export default function CustomImage({ sourse, size = 200, style }) {
  return (
    <View style={style}>
      <Image
        style={{ width: size, height: size }}
        source={{
          uri: sourse,
        }}
      />
    </View>
  );
}

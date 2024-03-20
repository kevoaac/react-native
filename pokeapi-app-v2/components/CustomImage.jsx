import { Image, View } from "react-native";

export default function CustomImage({ sourse, size }) {
  return (
    <Image
      style={{ width: size, height: size }}
      source={{
        uri: sourse,
      }}
    />
  );
}

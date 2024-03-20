import { Image, Text, View } from "react-native";

function parseId(id) {
  const parsedId = id?.toString().padStart(4, "0");
  return parsedId;
}

function PokeItem({ item, imgSize = 100 }) {
  const { name, id, sprite } = item;

  return (
    <View className="flex-row bg-slate-200 rounded-lg mx-10 overflow-hidden">
      <View className="bg-yellow-300/80">
        <Image
          source={{ uri: sprite }}
          style={{
            width: imgSize,
            height: imgSize,
          }}
        />
      </View>
      <View className="relative flex-1 justify-center p-2">
        <Text className="capitalize text-xl">{name}</Text>

        <View className="absolute z-10 top-0 right-0 bg-red-400 p-1 rounded-tr-md rounded-bl-md">
          <Text className="text-white/80 font-bold ">#{parseId(id)}</Text>
        </View>
      </View>
    </View>
  );
}

export default PokeItem;

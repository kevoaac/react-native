import { Text, View } from "react-native";
import CustomImage from "./CustomImage";

function parseId(id) {
  const parsedId = id?.toString().padStart(4, "0");
  return parsedId;
}

function PokemonInfo({ pokemon, style }) {
  return (
    <View
      style={style}
      className="relative bg-slate-200 p-4 rounded-md flex-row"
    >
      <View className="justify-center mr-2">
        <View className="bg-blue-100 rounded-full border border-slate-400">
          <CustomImage sourse={pokemon?.sprite} size={100} />
        </View>
      </View>

      <View className="absolute z-10 top-0 left-0 bg-red-400 p-1 rounded-tl-md rounded-br-md">
        <Text className="text-xl text-blue-500 font-bold text-center capitalize">
          #{parseId(pokemon?.id)}
        </Text>
      </View>

      <View>
        <Text className="text-2xl  capitalize">{pokemon?.name}</Text>
        {pokemon?.stats?.map((stat) => (
          <Text
            key={stat.stat.name}
            className="text-md text-black/80 font-bold uppercase"
          >
            {stat.stat.name}:
            <Text className="font-normal"> {stat.base_stat}</Text>
          </Text>
        ))}
      </View>
    </View>
  );
}

export default PokemonInfo;

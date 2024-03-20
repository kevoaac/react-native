import { FlatList, Text, View } from "react-native";
import PokeHeader from "../../components/PokeHeader";
import Constants from "expo-constants";
import PokeItem from "../../components/PokeItem";
import { fetchPokemonList } from "../../services/fetchPokemon";
import pokemonList from "../../mocks/pokemonList";
import { useEffect, useState } from "react";

function AllPokemons() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const data = await fetchPokemonList();
      setPokemonList(data);
    };
    getPokemonList();
  }, []);
  return (
    <View
      className="flex-1 bg-slate-50"
      style={{ marginTop: Constants.statusBarHeight }}
    >
      <PokeHeader
        title="PokeApi V2"
        titleColor="white"
        className="bg-rose-500 p-2"
      />
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <View className="h-2 bg-transparent" />}
        renderItem={({ item }) => <PokeItem item={item} imgSize={80} />}
        ListFooterComponent={() => <View className="h-2 bg-transparent" />}
        // ItemSeparatorComponent={() => <View className="h-2" />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

export default AllPokemons;

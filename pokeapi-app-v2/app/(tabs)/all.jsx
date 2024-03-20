import { ActivityIndicator, FlatList, Text, View } from "react-native";
import PokeHeader from "../../components/PokeHeader";
import Constants from "expo-constants";
import PokeItem from "../../components/PokeItem";
import { useEffect, useState } from "react";
import { fetchPokemonList } from "../../services/fetchPokemon";

function AllPokemons() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextURL, setNextURL] = useState("");

  const getList = async () => {
    if (loading) return;

    setLoading(true);
    console.log("fetching...");
    const { newPokemonList, next } = await fetchPokemonList(nextURL);

    setNextURL(next);
    setPokemonList((prev) => [...prev, ...newPokemonList]);
    setLoading(false);
  };

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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PokeItem item={item} imgSize={80} />}
        onEndReached={getList}
        onEndReachedThreshold={1}
        ListHeaderComponent={() => <View className="h-2 bg-transparent" />}
        ListFooterComponent={() => loading && <ActivityIndicator />}
        contentContainerStyle={{ gap: 10 }}
        // debug={true}
      />
    </View>
  );
}

export default AllPokemons;

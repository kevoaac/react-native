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
    setLoading(true);

    const { newPokemonList, next } = await fetchPokemonList(nextURL);

    setNextURL(next);
    setPokemonList((prev) => [...prev, ...newPokemonList]);
    setLoading(false);
  };

  useEffect(() => {
    getList();
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
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <View className="h-2 bg-transparent" />}
        renderItem={({ item }) => <PokeItem item={item} imgSize={80} />}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <Text onPress={getList} className="text-2xl text-center">
              Cargar más
            </Text>
          )
        }
        // ItemSeparatorComponent={() => <View className="h-2" />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

export default AllPokemons;

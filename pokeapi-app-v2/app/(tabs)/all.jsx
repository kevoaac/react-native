import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PokeHeader from "../../components/PokeHeader";
import Constants from "expo-constants";
import PokeItem from "../../components/PokeItem";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchPokemonList } from "../../services/fetchPokemon";

const uri =
  "https://e1.pxfuel.com/desktop-wallpaper/522/568/desktop-wallpaper-calvin-and-hobbes-16-16-bit-mobile-thumbnail.jpg";

function AllPokemons() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextURL, setNextURL] = useState("");

  const getList = async () => {
    if (loading) return;

    setLoading(true);
    console.log("fetching " + nextURL);
    const { newPokemonList, next } = await fetchPokemonList(nextURL);

    setNextURL(next);
    setPokemonList((prev) => [...prev, ...newPokemonList]);
    setLoading(false);
  };

  const refreshPage = () => {
    setPokemonList([]);
    setNextURL("");
    if (nextURL === "") getList();
  };

  const renderItem = useCallback(
    ({ item }) => <PokeItem item={item} imgSize={60} />,
    []
  );

  // Use case: impresiones de elementos visibles en la pantalla,
  // cuando el item es visible en un 50%
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: ({ viewableItems }) => {
        console.log("Visible items");
        viewableItems.forEach((item) => {
          console.log(`id: ${item.item.id} name: ${item.item.name}`);
        });
      },
    },
  ]);

  // Usado solo cuando usamos la propiedad debug={true} o debug  en FlatList
  // if (pokemonList.length === 0) return null;

  return (
    <View
      className="flex-1 bg-slate-50"
      style={{ marginTop: Constants.statusBarHeight }}
    >
      <Image source={{ uri }} style={[StyleSheet.absoluteFill]} />

      <PokeHeader
        title="PokeApi V2"
        titleColor="white"
        className="bg-rose-500 p-2"
      />

      <FlatList
        className="mx-3"
        data={pokemonList}
        // keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        onEndReached={getList}
        onEndReachedThreshold={1}
        ListHeaderComponent={() => <View className="h-2 bg-transparent" />}
        ListFooterComponent={() => loading && <ActivityIndicator />}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        // debug
        refreshing={loading}
        onRefresh={refreshPage}
        // performance properties
        initialNumToRender={10}
        // Visible item
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        // Multiple columns
        numColumns={2}
      />
    </View>
  );
}

export default AllPokemons;

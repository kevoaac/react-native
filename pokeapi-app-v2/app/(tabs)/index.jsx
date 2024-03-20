import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CustomImage from "../../components/CustomImage";
import PokemonInfo from "../../components/PokemonInfo";
import PokeHeader from "../../components/PokeHeader";
import { usePokemon } from "../../hooks/usePokemon";
import Constants from "expo-constants";
import { defaultPokemon } from "../../mocks/defaultPokemon";
import Search from "../../components/Search";

export default function PokeapiV2() {
  const [idPokemon, setIdPokemon] = useState({ id: "1" });
  const { pokemon, setPokemon, getPokemon, loading, error } =
    usePokemon(idPokemon);

  // default pokemon Ditto
  useEffect(() => {
    setPokemon(defaultPokemon);
  }, []);

  // handle submit
  const handleSubmit = () => {
    getPokemon(idPokemon);
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

      <Search
        handleSubmit={handleSubmit}
        onChangeText={(inputId) => setIdPokemon(inputId)}
      />

      {loading && (
        <Text className="text-black font-bold text-center my-2">
          Cargando...
        </Text>
      )}
      {error && (
        <Text className="text-red-500 font-bold text-center my-2">
          Error al buscar, intenta con otro id o nombre
        </Text>
      )}

      <PokemonInfo pokemon={pokemon} className="mx-auto" />

      <View className="bg-blue-300 mx-auto p-2 rounded-lg my-4">
        <CustomImage sourse={pokemon?.homeSprite} size={150} />
      </View>
    </View>
  );
}

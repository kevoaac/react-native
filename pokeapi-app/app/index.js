import { useCallback, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

function usePokemon(id) {
  const [pokemon, setPokemon] = useState({});

  const getPokemon = useCallback(async () => {
    const pok = await fetchPokemon(id);
    setPokemon(pok);
  }, [id]);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    // console.log(data);

    return data;
  };

  return { pokemon, getPokemon };
}

export default function PokeApiApp() {
  const [idPokemon, setIdPokemon] = useState("");
  const { pokemon, getPokemon } = usePokemon(idPokemon);
  return (
    <View className="flex-1 mx-10">
      <Text className="text-center text-3xl mt-5 font-bold text-orange-600">
        Busca tu pokemón!
      </Text>
      <View className="flex-row items-center gap-2 mt-5">
        <TextInput
          className="border-2 border-gray-400 h-10 p-2 rounded-lg"
          keyboardType="numeric"
          onChangeText={(id) => setIdPokemon(id)}
          onSubmitEditing={async () => await getPokemon()} // Added 'await' keyword before getPokemon function call
          placeholder="Escribe el id del pokemon"
          returnKeyType="none"
        />
        <TouchableOpacity
          className="bg-blue-500 p-2 rounded-sm flex-row"
          onPress={async () => await getPokemon()}
        >
          <Text className="font-bold text-white">Buscar Pokemon</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center text-lg uppercase font-bold my-5">
        {pokemon.name ? (
          pokemon.name
        ) : (
          <Text className="font-normal text-red-500">
            busca un pokemon válido
          </Text>
        )}
      </Text>
      <View className="bg-slate-300 justify-center items-center rounded-lg">
        <Image
          source={{ uri: pokemon.sprites?.front_default }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}

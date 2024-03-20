import { Text, TextInput, TouchableOpacity, View } from "react-native";

function Search({ handleSubmit, onChangeText }) {
  return (
    <View className="flex-row mx-10 items-center my-4">
      <TextInput
        className="p-1 flex-1 rounded-md border border-slate-500/50"
        keyboardType="default"
        returnKeyType="none"
        onChangeText={onChangeText}
        placeholder="Ingresa id o nombre del pokemon"
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity
        className="bg-blue-300 p-2 px-4 items-center rounded-lg"
        onPress={handleSubmit}
      >
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Search;

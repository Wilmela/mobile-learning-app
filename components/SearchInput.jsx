import { View, TextInput } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FONTS, SIZES } from "../constants/theme";
import { useAppContext } from "../context";

const SearchInput = () => {
  const { setSearchTerm } = useAppContext();
  const handleFilter = (subject) => {
    setSearchTerm(subject);
  };
  return (
    <View className=" space-x-1 flex-row w-full">
      <TextInput
        placeholder="Filter a subject.."
        onChangeText={handleFilter}
        className="p-2 rounded-md border border-gray-200 flex-1 bg-LIGHT_GRAY"
        style={{
          fontFamily: FONTS.Light,
          fontSize: SIZES.Small,
        }}
      />

      {/* <Ionicons
        name="md-search"
        size={28}
        color="#fff"
        style={{
          padding: 10,
          borderColor: "rgb(229 231 235)",
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: "#E56050",
        }}
      /> */}
    </View>
  );
};

export default SearchInput;

import React from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Container, Input } from "../styles/StyledSearchBar";

const SearchBar = () => {
  return (
    <Container>
      <TextInput
        placeholder="Search here"
        placeholderTextColor="grey"
        numberOfLines={1}
        style={{ width: "100%" }}
      />
      <View
        style={{
          position: "relative",
          left: -20,
          backgroundColor: "#e78200",
          width: 25,
          height: 25,
          borderRadius: 12.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="search1" size={15} color="white" />
      </View>
    </Container>
  );
};

export default SearchBar;

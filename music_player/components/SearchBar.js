import React from "react";
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Container, IconWrapper, Input } from "../styles/StyledSearchBar";

const SearchBar = () => {
  return (
    <Container>
      <TextInput
        placeholder="Search here"
        placeholderTextColor="grey"
        numberOfLines={1}
        style={{ width: "100%", height: "100%" }}
      />
      <IconWrapper>
        <AntDesign name="search1" size={15} color="white" />
      </IconWrapper>
    </Container>
  );
};

export default SearchBar;

import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Container, IconWrapper } from "../styles/StyledSearchBar";

const SearchBar = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="grey"
            numberOfLines={1}
          />
          <IconWrapper>
            <AntDesign name="search1" size={15} color="white" />
          </IconWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SearchBar;

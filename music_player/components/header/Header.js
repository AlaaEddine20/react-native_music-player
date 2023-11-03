import React from "react";
import { Image, View } from "react-native";
import { AppHeader } from "./styles";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  return (
    <AppHeader>
      <Image
        source={require("../../assets/logo-no-background.png")}
        style={{ width: 120, height: 50 }}
        resizeMode="contain"
      />
      <SearchBar />
    </AppHeader>
  );
};

export default Header;

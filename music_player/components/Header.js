import React from "react";
import { Image, View } from "react-native";
import { AppHeader } from "../styles/Header";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <AppHeader>
      <Image
        source={require("../assets/logo-no-background3.png")}
        style={{ width: 100, height: 50 }}
        resizeMode="contain"
      />
      <SearchBar />
    </AppHeader>
  );
};

export default Header;

import React from "react";
import { Image } from "react-native";
import { AppHeader } from "../styles/StyledHeader";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <AppHeader>
      <Image
        source={require("../assets/appLogo2.png")}
        style={{ width: 100, height: 50 }}
        resizeMode="cover"
      />
      <SearchBar />
    </AppHeader>
  );
};

export default Header;

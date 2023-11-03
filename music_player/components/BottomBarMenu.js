import React from "react";
import { BarContainer, Wrapper } from "../styles/BottomBar";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const BottomBarMenu = () => {
  return (
    <BarContainer>
      <AntDesign name="home" size={30} color="#fff" />
      <MaterialCommunityIcons
        name="music-box-multiple-outline"
        size={30}
        color="#fff"
      />
      <MaterialCommunityIcons name="location-exit" size={30} color="#fff" />
    </BarContainer>
  );
};

export default BottomBarMenu;

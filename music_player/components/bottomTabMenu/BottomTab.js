import React from "react";
import { BarContainer } from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTabMenu = () => {
  return (
    <BarContainer>
      <AntDesign name="home" size={30} color="#F7EFE5" />
      <MaterialCommunityIcons
        name="music-box-multiple-outline"
        size={30}
        color="#F7EFE5"
      />
      <MaterialCommunityIcons name="location-exit" size={30} color="#F7EFE5" />
    </BarContainer>
  );
};

export default BottomTabMenu;

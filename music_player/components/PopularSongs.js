import React from "react";
import { Text, View } from "react-native";
import {
  Box,
  BoxesContainer,
  Container,
  SectionHeading,
} from "../styles/PopularSongs";
import { AntDesign } from "@expo/vector-icons";

const PopularSongs = () => {
  return (
    <Container>
      <SectionHeading>
        <AntDesign name="rocket1" size={24} color="#fff" />
        <Text style={{ fontSize: 18, color: "#fff" }}>Popular songs</Text>
      </SectionHeading>
      <BoxesContainer>
        <Box />
        <Box />
        <Box />
        <Box />
      </BoxesContainer>
    </Container>
  );
};

export default PopularSongs;

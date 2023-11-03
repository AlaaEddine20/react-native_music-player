import React from "react";
import { Text } from "react-native";
import { Box, BoxesContainer, Container, SectionHeading } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const Categories = () => {
  return (
    <Container>
      <SectionHeading>
        <MaterialIcons name="category" size={24} color="#e78200" />
        <Text style={{ fontSize: 18, color: "#F7EFE5" }}>Categories</Text>
      </SectionHeading>
      <BoxesContainer>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>Pop hits</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>Hip Hop</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>Dance</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>80's</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>90's</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>Rock</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>Latino</Text>
        </Box>
        <Box>
          <Text style={{ color: "#F7EFE5", fontWeight: 600 }}>Chill</Text>
        </Box>
      </BoxesContainer>
    </Container>
  );
};

export default Categories;

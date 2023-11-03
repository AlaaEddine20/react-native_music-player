import React from "react";
import { Text, View } from "react-native";
import { Box, BoxesContainer, Container, SectionHeading } from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const PopularSongs = () => {
  return (
    <Container>
      <SectionHeading>
        <AntDesign name="rocket1" size={24} color="#e78200" />
        <Text style={{ fontSize: 18, color: "#F7EFE5" }}>Popular songs</Text>
      </SectionHeading>
      <BoxesContainer>
        <Box>
          <View>
            <MaterialCommunityIcons
              name="play-speed"
              size={30}
              color="#F7EFE5"
            />
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text style={{ color: "#F7EFE5" }}>Name of song</Text>
            <Text style={{ color: "#F7EFE5" }}>Name of Artist</Text>
          </View>
        </Box>
        <Box>
          <View>
            <MaterialCommunityIcons
              name="play-speed"
              size={30}
              color="#F7EFE5"
            />
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text style={{ color: "#F7EFE5" }}>Name of song</Text>
            <Text style={{ color: "#F7EFE5" }}>Name of Artist</Text>
          </View>
        </Box>
        <Box>
          <View>
            <MaterialCommunityIcons
              name="play-speed"
              size={30}
              color="#F7EFE5"
            />
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text style={{ color: "#F7EFE5" }}>Name of song</Text>
            <Text style={{ color: "#F7EFE5" }}>Name of Artist</Text>
          </View>
        </Box>
        <Box>
          <View>
            <MaterialCommunityIcons
              name="play-speed"
              size={30}
              color="#F7EFE5"
            />
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text style={{ color: "#F7EFE5" }}>Name of song</Text>
            <Text style={{ color: "#F7EFE5" }}>Name of Artist</Text>
          </View>
        </Box>
        <Box>
          <View>
            <MaterialCommunityIcons
              name="play-speed"
              size={30}
              color="#F7EFE5"
            />
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text style={{ color: "#F7EFE5" }}>Name of song</Text>
            <Text style={{ color: "#F7EFE5" }}>Name of Artist</Text>
          </View>
        </Box>
        <Box>
          <View>
            <MaterialCommunityIcons
              name="play-speed"
              size={30}
              color="#F7EFE5"
            />
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text style={{ color: "#F7EFE5" }}>Name of song</Text>
            <Text style={{ color: "#F7EFE5" }}>Name of Artist</Text>
          </View>
        </Box>
      </BoxesContainer>
    </Container>
  );
};

export default PopularSongs;

import React from "react";
import { Text, View } from "react-native";
import { Box, BoxesContainer, SectionHeading } from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const PopularSongs = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <SectionHeading>
        <AntDesign name="rocket1" size={24} color="#e78200" />
        <Text style={{ fontSize: 18, color: "#e78200" }}>Popular songs</Text>
      </SectionHeading>
      <BoxesContainer>
        {SongBoxesData.map((a, i) => {
          return (
            <Box key={i}>
              <View>
                <MaterialCommunityIcons
                  name="play-speed"
                  size={30}
                  color="#F5F5F5"
                />
              </View>
              <View style={{ display: "flex", gap: 10 }}>
                <Text style={{ color: "#F5F5F5" }}>{a.songName}</Text>
                <Text style={{ color: "#F5F5F5" }}>{a.artistName}</Text>
              </View>
            </Box>
          );
        })}
      </BoxesContainer>
    </View>
  );
};

const SongBoxesData = [
  {
    artistName: "Artist name",
    songName: "Song name",
  },
  {
    artistName: "Artist name",
    songName: "Song name",
  },
  {
    artistName: "Artist name",
    songName: "Song name",
  },
  {
    artistName: "Artist name",
    songName: "Song name",
  },
  {
    artistName: "Artist name",
    songName: "Song name",
  },
  {
    artistName: "Artist name",
    songName: "Song name",
  },
];

export default PopularSongs;

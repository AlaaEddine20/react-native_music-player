import React from "react";
import { Text, View } from "react-native";
import { Box, BoxesContainer, SectionHeading } from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../variables/colors";

const PopularSongs = () => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <SectionHeading>
        <AntDesign
          name="rocket1"
          size={24}
          color="#363062"
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.55)",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
          }}
        />
        <Text style={{ fontSize: 18, color: PRIMARY_ORANGE }}>
          Popular songs
        </Text>
      </SectionHeading>
      <BoxesContainer>
        {SongBoxesData.map((a, i) => {
          return (
            <Box key={i}>
              <View>
                <MaterialCommunityIcons
                  name="play-speed"
                  size={30}
                  color={PRIMARY_WHITE}
                />
              </View>
              <View style={{ display: "flex", gap: 10 }}>
                <Text style={{ color: PRIMARY_WHITE }}>{a.songName}</Text>
                <Text style={{ color: PRIMARY_WHITE }}>{a.artistName}</Text>
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

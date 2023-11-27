import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import {
  Box,
  BoxExternal,
  BoxImage,
  BoxesContainer,
  SectionHeading,
} from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../variables/colors";
import axios from "axios";

const PopularSongs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const url = "https://shazam.p.rapidapi.com/charts/track";

  const options = {
    method: "GET",
    url: url,
    params: {
      locale: "en-US",
      pageSize: "6",
      startFrom: "0",
    },
    headers: {
      "X-RapidAPI-Key": "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setData(response.data.tracks);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    data && (
      <View style={{ flex: 1, marginTop: 30 }}>
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
          {!isLoading ? (
            data.map((a, i) => (
              <BoxExternal>
                <BoxImage key={i}>
                  <Image
                    source={{ uri: a.images.coverart }}
                    style={[
                      {
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                        padding: 10,
                      },
                      StyleSheet.absoluteFillObject,
                    ]}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay} />
                </BoxImage>
                <View style={{ marginTop: 5 }}>
                  <Text
                    numberOfLines={1}
                    style={{ fontSize: 14, color: PRIMARY_ORANGE }}
                  >
                    {a.title}
                  </Text>
                  <Text style={{ fontSize: 12, color: PRIMARY_ORANGE }}>
                    {a.subtitle}
                  </Text>
                </View>
              </BoxExternal>
            ))
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginVertical: 60,
              }}
            >
              <ActivityIndicator color={PRIMARY_ORANGE} size={"large"} />
            </View>
          )}
        </BoxesContainer>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default PopularSongs;

import React from "react";
import { Text, View } from "react-native";
import { Box, BoxesContainer, SectionHeading } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../variables/colors";

const Categories = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <SectionHeading>
        <MaterialIcons
          name="category"
          size={24}
          color="#363062"
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.55)",
            textShadowOffset: { width: 1, height: 2 },
            textShadowRadius: 1,
          }}
        />
        <Text style={{ fontSize: 18, color: PRIMARY_ORANGE }}>Categories</Text>
      </SectionHeading>
      <BoxesContainer>
        {Genres.map((c, i) => {
          return (
            <Box key={i}>
              <Text style={{ color: PRIMARY_WHITE, fontWeight: 600 }}>
                {c.categoryName}
              </Text>
            </Box>
          );
        })}
      </BoxesContainer>
    </View>
  );
};

const Genres = [
  { categoryName: "Pop" },
  { categoryName: "Rap" },
  { categoryName: "Rock" },
  { categoryName: "Dance" },
  { categoryName: "Techno" },
  { categoryName: "Rock" },
  { categoryName: "Latino" },
  { categoryName: "90's" },
  { categoryName: "Jazz" },
  { categoryName: "Classical" },
];

export default Categories;

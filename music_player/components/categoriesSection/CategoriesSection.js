import React from "react";
import { Text, View } from "react-native";
import { Box, BoxesContainer, SectionHeading } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <SectionHeading>
        <MaterialIcons name="category" size={24} color="#e78200" />
        <Text style={{ fontSize: 18, color: "#e78200" }}>Categories</Text>
      </SectionHeading>
      <BoxesContainer>
        {Genres.map((c, i) => {
          return (
            <Box key={i}>
              <Text style={{ color: "#F5F5F5", fontWeight: 600 }}>
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

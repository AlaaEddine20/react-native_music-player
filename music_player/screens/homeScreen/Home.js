import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "../../components/header/Header";
import UserGreeting from "../../components/userGreeting/UserGreeting";
import PopularSongs from "../../components/popularSongsSection/PopularSongsSection";
import BottomTabMenu from "../../components/bottomTabMenu/BottomTab.js";
import Categories from "../../components/categoriesSection/CategoriesSection.js";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#343a40" }}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Header />
        <UserGreeting />
        <PopularSongs />
        <Categories />
      </ScrollView>
      <BottomTabMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default Home;

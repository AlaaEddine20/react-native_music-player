import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/header/Header";
import UserGreeting from "../../components/userGreeting/UserGreeting";
import PopularSongs from "../../components/popularSongsSection/PopularSongsSection";
import BottomTabMenu from "../../components/bottomTabMenu/BottomTab.js";
import Categories from "../../components/categoriesSection/CategoriesSection.js";
import { PRIMARY_LIGHT_PURPLE } from "../../variables/colors";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY_LIGHT_PURPLE }}>
      <ScrollView
        style={{ paddingHorizontal: 15 }}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Header />
        <UserGreeting />
        <PopularSongs />
        <Categories />
      </ScrollView>
      <BottomTabMenu />
    </SafeAreaView>
  );
};

export default Home;

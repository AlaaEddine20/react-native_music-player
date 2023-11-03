import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import UserGreeting from "../components/UserGreeting";
import PopularSongs from "../components/PopularSongs";
import BottomBarMenu from "../components/BottomBarMenu";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#415a77" }}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Header />
        <UserGreeting />
        <PopularSongs />
      </ScrollView>
      <BottomBarMenu />
    </SafeAreaView>
  );
};

export default Home;

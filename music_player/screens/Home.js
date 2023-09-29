import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import UserGreeting from "../components/UserGreeting";
import PopularSongs from "../components/PopularSongs";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fcfcfc" }}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Header />
        <UserGreeting />
        <PopularSongs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

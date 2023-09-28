import React from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import Header from "../components/Header";
import UserGreeting from "./UserGreeting";
import PopularSongs from "../components/PopularSongs";

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <UserGreeting />
      <PopularSongs />
    </ScrollView>
  );
};

export default Home;

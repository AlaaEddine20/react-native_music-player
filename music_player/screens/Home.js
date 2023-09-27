import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";
import UserGreeting from "./UserGreeting";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <UserGreeting />
    </SafeAreaView>
  );
};

export default Home;

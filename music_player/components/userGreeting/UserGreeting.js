import React from "react";
import { Text, View } from "react-native";
import { Container } from "./styles";

const UserGreeting = () => {
  return (
    <Container>
      <Text style={{ fontSize: 20, color: "#F7EFE5" }}>Welcome back user</Text>
    </Container>
  );
};

export default UserGreeting;

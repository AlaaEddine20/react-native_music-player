import React from "react";
import { Text, View } from "react-native";
import { Container, Greeting } from "../styles/UserGreeting";
import { useUser } from "../context/userContext";

const UserGreeting = () => {
  const { state } = useUser();
  const user = state.user._tokenResponse;

  return (
    <Container>
      <Text style={{ fontSize: 20, color: "#fff" }}>
        Welcome back {user.displayName}
      </Text>
    </Container>
  );
};

export default UserGreeting;

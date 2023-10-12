import React from "react";
import { Text, Image } from "react-native";
import { Container, Greeting } from "../styles/StyledUserGreeting";
import { useUser } from "../context/userContext";

const UserGreeting = () => {
  const { state } = useUser();
  const user = state.user._tokenResponse;

  return (
    <Container>
      <Greeting>
        <Text style={{ fontSize: 20 }}>Welcome back,</Text>
        <Text style={{ fontSize: 25 }}>{user.displayName}</Text>
      </Greeting>
      <Image
        source={{ uri: "https://loremflickr.com/320/240" }}
        resizeMode="cover"
        height={80}
        width={80}
        style={{ borderRadius: 40, borderWidth: 0.5, borderColor: "#650d88" }}
      />
    </Container>
  );
};

export default UserGreeting;

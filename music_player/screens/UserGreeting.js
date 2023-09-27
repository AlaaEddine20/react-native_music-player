import React from "react";
import { View, Text, Image } from "react-native";
import { Container, ProfilePic, Greeting } from "../styles/StyledUserGreeting";

const UserGreeting = () => {
  return (
    <Container>
      <Greeting>
        <Text style={{ fontSize: 20 }}>Welcome back,</Text>
        <Text style={{ fontSize: 25 }}>user name</Text>
      </Greeting>
      <ProfilePic
        source={{ uri: "https://loremflickr.com/320/240" }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default UserGreeting;

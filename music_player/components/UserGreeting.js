import React from "react";
import { Text, Image, View } from "react-native";
import { Container, Greeting } from "../styles/StyledUserGreeting";
import { useUser } from "../context/userContext";
import { MaterialIcons } from "@expo/vector-icons";

const UserGreeting = () => {
  const { state } = useUser();
  const user = state.user._tokenResponse;

  return (
    <Container>
      <Greeting>
        <Text style={{ fontSize: 20 }}>Welcome back,</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={{ fontSize: 25 }}>{user.displayName}</Text>
          <MaterialIcons name="logout" size={24} color="black" />
        </View>
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

import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { RegisterAccountContainer } from "../styles/StyledRegisterScreen";
import { Ionicons } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RegisterAccountContainer>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 15 }}>Back</Text>
        </Pressable>
      </RegisterAccountContainer>
    </SafeAreaView>
  );
};

export default Register;

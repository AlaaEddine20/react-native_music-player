import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

const UserGreeting = () => {
  const { user } = useAuth();

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 20, color: "#F5F5F5" }}>
        Welcome back {user ? user.displayName : "Error finding username"}
      </Text>
    </View>
  );
};

export default UserGreeting;

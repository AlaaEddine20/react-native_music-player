import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const UserGreeting = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 20, color: "#F5F5F5" }}>
        Welcome back{" "}
        {user && user.user ? user.user.displayName : "Error finding username"}
      </Text>
    </View>
  );
};

export default UserGreeting;

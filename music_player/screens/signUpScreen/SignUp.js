import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { RegisterAccountContainer, SignUpBtn } from "./styles";
import { Input } from "../../screens/loginScreen/styles";
import CustomCta from "../../components/CustomCta";

const SignUpPage = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SignUp = async () => {
    setIsLoading(true);
    let errorOccured = false;

    const auth = FIREBASE_AUTH;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        await updateProfile(response.user, {
          displayName: userName,
        });
      }
    } catch (error) {
      console.log(error);
      errorOccured = true;

      if (error.code === "auth/email-already-in-use") {
        alert(
          "Email is already in use. Please sign in or use a different email."
        );
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email format. Please check your email and try again.");
      } else if (error.code === "auth/weak-password") {
        alert(
          "Password may be less than 6 characters or weak. Please choose a stronger password."
        );
      } else {
        alert("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);

      if (!errorOccured) {
        navigation.navigate("Login");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1 }}
        >
          <RegisterAccountContainer>
            <Image
              source={require("../../assets/logo-no-background.png")}
              resizeMode="contain"
              style={{ width: 200, height: 150 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#363062" }}>
              Welcome
            </Text>
            <View style={{ marginTop: 40, gap: 20 }}>
              <Input
                placeholder="Choose a username"
                autoCapitalize="none"
                value={userName}
                onChangeText={setUserName}
              />
              <Input
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Choose a password"
                autoCapitalize="none"
                secureTextEntry={true}
                style={{ marginTop: 15 }}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <SignUpBtn onPress={SignUp}>
              {CustomCta("Sign up", isLoading)}
            </SignUpBtn>
          </RegisterAccountContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpPage;

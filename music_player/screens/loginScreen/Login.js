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
import React, { useState } from "react";
import { Input, LoginBtn, LoginScreenContainer } from "./styles";
import { Link } from "@react-navigation/native";
import { useUser } from "../../context/userContext";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomCta from "../../components/CustomCta";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useUser();
  const auth = FIREBASE_AUTH;

  const SignIn = async () => {
    setIsLoading(true);
    let errorOccured = false;

    if (email && password) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);

        if (user) {
          dispatch({ type: "LOGIN", payload: user });
        }
      } catch (error) {
        console.log(error);
        errorOccured = true;

        if (error.code === "auth/invalid-login-credentials") {
          alert("Wrong credentials, please check your email and password!");
        }
      } finally {
        setIsLoading(false);
        if (!errorOccured) {
          navigation.navigate("Home");
        }
      }
    } else {
      setIsLoading(false);
      alert("Please type in your email and password!");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, height: "100%" }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1, height: "100%" }}
        >
          <LoginScreenContainer>
            <Image
              source={require("../../assets/logo-no-background.png")}
              resizeMode="contain"
              style={{ width: 200, height: 150 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#650d88" }}>
              Welcome
            </Text>
            <View style={{ marginTop: 40, gap: 20 }}>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                style={{ marginTop: 15 }}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Link
              to={{ screen: "Register", params: "register" }}
              style={{ marginTop: 30, fontSize: 12, color: "#e78200" }}
            >
              Create a new account
            </Link>
            <LoginBtn onPress={SignIn}>
              {CustomCta("Login", isLoading)}
            </LoginBtn>
          </LoginScreenContainer>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

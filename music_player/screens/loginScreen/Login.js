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
import React, { useEffect, useState } from "react";
import { Input, LoginBtn, LoginScreenContainer } from "./styles";
import { Link } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomCta from "../../components/CustomCta";
import { useDispatch, useSelector } from "react-redux";
import { login, setError, setLoading } from "../../redux/loginReducer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorLogin = useSelector((state) => state.error.isError);
  const errorMsg = useSelector((state) => state.error.errorMsg);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const auth = FIREBASE_AUTH;
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorLogin) {
      alert(errorMsg);
    }
    return;
  }, [errorLogin]);

  const SignIn = async () => {
    try {
      dispatch(setLoading(true));
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user && !errorLogin) {
        dispatch(login(user));
        navigation.navigate("Home");
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);

      if (error.code === "auth/invalid-login-credentials") {
        dispatch(setError("Wrong Credentials!"));
        setLoading(false);
      } else if (error.code === "auth/invalid-email") {
        dispatch(setError("Wrong email address"));
        setLoading(false);
      } else {
        dispatch(setError(error.code));
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
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
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#363062" }}>
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

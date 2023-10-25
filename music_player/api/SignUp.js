import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const SignUp = async ({
  email,
  password,
  userName,
  setIsLoading,
  navigation,
}) => {
  setIsLoading(true);
  let errorOccured = false;

  const auth = FIREBASE_AUTH;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(response.user, {
      displayName: userName,
    });
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

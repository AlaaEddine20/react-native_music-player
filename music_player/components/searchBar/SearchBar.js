import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IconWrapper } from "./styles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(200, { duration: 500 })
          : withTiming(0, { duration: 200 }),
    };
  });

  const handleSearchClick = () => {
    if (animation.value === 1) {
      animation.value = 0;
      setIsOpen(false);
      setSearchText("");
    } else {
      animation.value = 1;
      setIsOpen(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View style={[animatedDiv, animatedStyle, isOpen && border]}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="grey"
            numberOfLines={1}
            style={{ width: "100%", color: "#F5F5F5" }}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <IconWrapper>
            <TouchableOpacity onPress={handleSearchClick}>
              {isOpen ? (
                <AntDesign name="close" size={15} color="white" />
              ) : (
                <AntDesign name="search1" size={15} color="white" />
              )}
            </TouchableOpacity>
          </IconWrapper>
        </Animated.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const border = StyleSheet.create({
  borderWidth: 0.5,
  borderColor: "grey",
  borderRadius: 50,
  paddingVertical: 7.5,
  paddingHorizontal: 15,
});

const animatedDiv = StyleSheet.create({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
});

export default SearchBar;

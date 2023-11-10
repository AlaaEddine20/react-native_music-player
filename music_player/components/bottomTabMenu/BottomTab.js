import React, { useState } from "react";
import { BarContainer, ModalBox, ModalView } from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { Text, View } from "react-native";

const BottomTabMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const auth = FIREBASE_AUTH;

  const handleLogout = () => {
    try {
      setIsLoading(true);
      setInterval(() => {
        auth.signOut();
        setIsLoading(false);
        setModalVisible(false);
      }, 1500);
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  return (
    <BarContainer>
      <TouchableOpacity>
        <AntDesign name="home" size={30} color="#F7EFE5" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="music-box-multiple-outline"
          size={30}
          color="#F7EFE5"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={"#fff"} />
        ) : (
          <MaterialCommunityIcons
            name="location-exit"
            size={30}
            color="#F7EFE5"
          />
        )}
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        transparent={true}
      >
        <ModalView>
          <ModalBox>
            {isLoading ? (
              <View style={{ alignItems: "center" }}>
                <ActivityIndicator size={"small"} color={"#fff"} />
                <Text>Loggin out...</Text>
              </View>
            ) : (
              <React.Fragment>
                <View>
                  <Text>Are you sure you want to logout?</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Pressable onPress={handleLogout}>
                    <Text>Yes</Text>
                  </Pressable>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Cancel</Text>
                  </Pressable>
                </View>
              </React.Fragment>
            )}
          </ModalBox>
        </ModalView>
      </Modal>
    </BarContainer>
  );
};

export default BottomTabMenu;

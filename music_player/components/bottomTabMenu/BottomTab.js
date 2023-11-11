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
import {
  PRIMARY_LIGHT_PURPLE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
} from "../../variables/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomTabMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const auth = FIREBASE_AUTH;

  const handleLogout = () => {
    try {
      setIsLoading(true);
      auth.signOut();
      setIsLoading(false);
      setModalVisible(false);
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
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"small"} color={"#fff"} />
                <Text>Loggin out...</Text>
              </View>
            ) : (
              <React.Fragment>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    You are signin out, {"\n"}
                    are you sure?
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    gap: 15,
                  }}
                >
                  <Pressable
                    onPress={handleLogout}
                    style={{
                      backgroundColor: "#186F65",
                      width: "40%",
                      paddingVertical: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: PRIMARY_WHITE, fontSize: 12 }}>
                      Yes
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                      backgroundColor: "#B2533E",
                      width: "40%",
                      paddingVertical: 6,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: PRIMARY_WHITE, fontSize: 12 }}>
                      Cancel
                    </Text>
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

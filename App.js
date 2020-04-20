import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import Modal from "react-native-modalbox";

import { verticalScale } from "./Utils/ScreenUtils";

const { width, height } = Dimensions.get("window");
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const getModal = () => {
    return (
      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalVisible}
        style={styles.modalBox}
        onClosed={() => setModalVisible(false)}
      >
        <View style={styles.content}>
          {" "}
          <Text style={styles.textStyle}>AndroidVille</Text>
        </View>
      </Modal>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backGroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center"
    },
    modalBox: {
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      height,
      width,
      backGroundColor: "transparent"
    },
    content: {
      position: "absolute",
      bottom: 0,
      width,
      height: verticalScale(250),
      borderTopLeftRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 20,
      backGroundColor: "white"
    },
    textStyle: { fontsize: 23 }
  });
}

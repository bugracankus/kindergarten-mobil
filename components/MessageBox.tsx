import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Layout from "../constants/Layout";
// Sent message box
interface MessageBoxProps {
    mssgTxt:string;
}
export default function MessageBox(props: MessageBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.mssgTxt}>
        {props.mssgTxt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.6,
    height: Layout.window.height * 0.12,
    borderRadius: 10,
    marginLeft: Layout.window.width * 0.32,
    backgroundColor: "#64BBD7",
    justifyContent: "center",
    alignItems: "center",
  },
  mssgTxt: {
    width: Layout.window.width * 0.58,
    height: Layout.window.height * 0.1,
    fontSize:13,
    color:"white",
    justifyContent:"center",
    alignItems:"center"
},
});

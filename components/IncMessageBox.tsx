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
// incoming message box
interface IncMessageBoxProps {
    mssgTxt:string;
}
export default function IncMessageBox(props: IncMessageBoxProps) {
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
    marginLeft: Layout.window.width * 0.08,
    backgroundColor: "#DEDEDE",
    justifyContent: "center",
    alignItems: "center",
  },
  mssgTxt: {
    width: Layout.window.width * 0.58,
    height: Layout.window.height * 0.1,
    fontSize:13,
    color:"black",
    justifyContent:"center",
    alignItems:"center"
},
});

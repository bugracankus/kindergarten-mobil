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

interface ButtonProps {
  bttnTxt: string;
  backgroundColor: any;
  textColor: any;
  navigation: any;
  navigate: any;
}
export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.navigate);
      }}
    >
      <View style={[styles.bttn, { backgroundColor: props.backgroundColor }]}>
        <Text style={[styles.bttnTxt, { color: props.textColor }]}>
          {props.bttnTxt}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bttn: {
    height: Layout.window.height * 0.05,
    width: Layout.window.width * 0.85,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bttnTxt: {
    fontSize: 24,
  },
});

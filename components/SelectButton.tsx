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

interface SelectButtonProps {
  bttnTxt: string;
  backgroundColor: any;
  textColor: any;
  navigation: any;
  navigate: any;
}
export default function SelectButton(props: SelectButtonProps) {
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
    height: Layout.window.height * 0.07,
    width: Layout.window.width * 0.88,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  bttnTxt: {
    fontSize: 24,
  },
});

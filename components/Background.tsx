import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { HStack, VStack } from "native-base";
import Layout from "../constants/Layout";

interface BackgroundProps {
  title: string;
}
export default function Background(props: BackgroundProps) {
  return (
    <View style={styles.container}>
      <View style={styles.ground}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>{props.title}</Text>
        </View>
        <ImageBackground
          source={require("../assets/Logo/logo1.png")}
          style={styles.logo}
        >
          <View></View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoGround: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Layout.window.height * 0.2,
  },
  logo: {
    width: Layout.window.width * 0.7,
    height: Layout.window.width * 0.7,
    alignSelf: "center",
    marginTop:Layout.window.height*0.1
},
  ground: {
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: Layout.window.height * 0.04,
    height: Layout.window.height * 1,
    width: Layout.window.width * 0.9,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    height: Layout.window.height * 0.075,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9410",
  },
  titleTxt: {
    fontSize: 26,
    color: "white",
    letterSpacing: 1,
  },
});

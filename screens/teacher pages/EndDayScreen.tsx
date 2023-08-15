import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../../constants/Layout";

import Title from "../../components/Title";
export default function EndDayScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"GÜN SONU"} />
      <View style={styles.ground}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>ÖĞRENCİLERİM</Text>
        </View>
        <ImageBackground
          source={require("../../assets/Logo/logo1.png")}
          style={styles.logo}
        >
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
    marginTop: Layout.window.height * 0.1,
  },
  ground: {
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: Layout.window.height * 0.07,
    height: Layout.window.height * 0.9,
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

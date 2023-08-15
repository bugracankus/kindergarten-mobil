import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../../constants/Layout";

import Title from "../../components/Title";
export default function ServicePage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"SERVİS TAKİP"} />
      <View style={styles.logoGround}>
        <Image
          source={require("../../assets/Logo/logo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoGround:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:Layout.window.height*0.2
  },
  logo: {
    opacity:0.25,
    width:Layout.window.width*0.7,
    height:Layout.window.width*0.7,
  },
});

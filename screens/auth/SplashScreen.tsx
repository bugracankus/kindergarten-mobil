import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Logo/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: Layout.window.width * 0.5,
    height: Layout.window.width * 0.5,
  },
});

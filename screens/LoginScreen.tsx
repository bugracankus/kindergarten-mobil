import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../constants/Layout";
import { HStack } from "native-base";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/Logo/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.inpContainer}>
              <HStack>
                <Text>
                  Giriş Yap
                </Text>
              </HStack>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer:{
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    width:Layout.window.width*0.95,
    height:Layout.window.height*0.45
  },
  logo: {
    width:Layout.window.width*0.6,
    height:Layout.window.width*0.6,
  },
  inpContainer:{
    width:Layout.window.width*1,
    height:Layout.window.height*0.51,
    backgroundColor:"#FF9410",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  }
});

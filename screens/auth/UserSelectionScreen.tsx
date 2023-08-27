import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../constants/Layout";
import {  Input, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const UserSelectionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Logo/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.inpContainer}>
          <VStack
            style={{ justifyContent: "center", alignItems: "center" }}
            padding={7}
          >
            <Text style={styles.infoTxt}>Kullanıcı Seç</Text>
            <VStack padding={7} space={5}>
              <TouchableOpacity onPress={() => navigation.navigate("PLoginScreen")} >
                <View style={styles.bttn}>
                  <Text style={styles.bttnTxt}>Veli Girişi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreenT")} >
                <View style={styles.bttn}>
                  <Text style={styles.bttnTxt}>Öğretmen Girişi</Text>
                </View>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default UserSelectionScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: Layout.window.width * 0.95,
    height: Layout.window.height * 0.45,
  },
  logo: {
    width: Layout.window.width * 0.6,
    height: Layout.window.width * 0.6,
  },
  inpContainer: {
    width: Layout.window.width * 1,
    height: Layout.window.height * 0.4,
    backgroundColor: "#FF4C52",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    marginTop:Layout.window.height*0.1,
  },
  infoTxt: {
    fontSize: 46,
    color: "white",
  },
  inpGround: {
    marginTop: Layout.window.height * 0.05,
  },
  input: {
    height: Layout.window.height * 0.05,
    width: Layout.window.width * 0.8,
    backgroundColor: "white",
    opacity: 0.75,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  bttn: {
    height: Layout.window.height * 0.05,
    width: Layout.window.width * 0.8,
    backgroundColor:"white",
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  bttnTxt:{
    fontSize:22,
    color:"#FF4C52",
  }
});

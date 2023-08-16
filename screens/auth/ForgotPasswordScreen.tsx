import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../constants/Layout";
import { HStack, Input, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import homeScreen from "../teacher pages/HomeScreenT";
const ForgotPasswordScreen = () => {
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
            <Text style={styles.infoTxt}>Şifremi Unuttum</Text>
            <VStack padding={7} space={5}>
              <TouchableOpacity>
                <View style={styles.bttn}>
                  <Text style={styles.bttnTxt}>Onay Kodu Gönder</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.bttn}>
                  <Text style={styles.bttnTxt}>Onay Kodlu Giriş</Text>
                  {/* şifremi unuttum modali eklenecek */}
                </View>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default ForgotPasswordScreen;
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
    marginTop: Layout.window.height * 0.15,
    backgroundColor: "#AA2193",
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
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bttnTxt: {
    fontSize: 22,
    color: "#AA2193",
  },
});

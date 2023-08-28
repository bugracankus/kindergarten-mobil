import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../constants/Layout";
import {  Input, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PLoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (phoneNumber !== "" && password !== "") {
      axios.post('https://epic-shortly-minnow.ngrok-free.app/api/custodian-login', {
        phoneNumber,
        password,
      }).then(async (res) => {
        console.log(res.data);
        if (res.data.type === "success") {
          await AsyncStorage.setItem('token', res.data.token);
          navigation.navigate("PHomePages");
        } else if (res.data.type === "error") {
          Alert.alert(
            'Hata!',
            res.data.error,
            [{ text: 'Tamam' }],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            'Hata!',
            'Bilinmeyen bir hata meydana geldi!',
            [{ text: 'Tamam' }],
            { cancelable: false }
          );
        }
      });
    } else {
      Alert.alert(
        'Hata!',
        'Tüm alanlar zorunludur!',
        [{ text: 'Tamam' }],
        { cancelable: false }
      );
    }
  };  

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
            <Text style={styles.infoTxt}>Giriş Yap</Text>
            <VStack padding={7} space={5}>
              <View style={styles.input}>
              <Input
                  placeholder="Telefon No"
                  fontSize={22}
                  onChangeText={(text) => setPhoneNumber(text)}
                  value={phoneNumber}
                />
              </View>
              <View style={styles.input}>
                <Input
                  variant="unstyled"
                  placeholder="Şifre"
                  fontSize={22}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </View>
            </VStack>
            <VStack padding={7} space={5}>
              <TouchableOpacity onPress={handleLogin}>
                <View style={styles.bttn}>
                  <Text style={styles.bttnTxt}>Giriş Yap</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("PForgotPasswordScreen")}>
                <View style={styles.bttn}>
                  <Text style={styles.bttnTxt}>Şifremi Unuttum</Text>
                </View>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default PLoginScreen;
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
    height: Layout.window.height * 0.51,
    backgroundColor: "#FF9410",
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
    backgroundColor:"white",
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  bttnTxt:{
    fontSize:22,
    color:"#FF9410",
  }
});

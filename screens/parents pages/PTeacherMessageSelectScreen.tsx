import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import Background from "../../components/Background";
import { HStack, Input, VStack } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import MessageBox from "../../components/MessageBox";
import IncMessageBox from "../../components/IncMessageBox";

export default function PTeacherMessageSelectScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"ÖĞRETMENE MESAJ"} />
      <View>
        <Background title={"ÖĞRETMENİM"} />
        <ScrollView
          style={{
            marginTop: Layout.window.height * 0.115,
            height: Layout.window.height * 1,
          }}
        >
          <View style={styles.listGround}>
            <VStack space={3}>
              <MessageBox
                mssgTxt={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type   "
                }
              />
              <IncMessageBox
                mssgTxt={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type   "
                }
              />
            </VStack>
          </View>
          <HStack space={1}>
            <View style={styles.mssg}>
              <Input
                style={{
                  height: Layout.window.height * 0.085,
                  width: Layout.window.width * 0.65,
                  borderRadius: 20,
                }}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.bttn}>
                <Text style={styles.bttnTxt}>GÖNDER</Text>
              </View>
            </TouchableOpacity>
          </HStack>
        </ScrollView>
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
  listGround: {
    marginTop: Layout.window.height * 0.022,
  },
  mssg: {
    height: Layout.window.height * 0.085,
    width: Layout.window.width * 0.65,
    marginLeft: Layout.window.width * 0.06,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginTop: Layout.window.height * 0.36,
  },
  bttn: {
    height: Layout.window.height * 0.085,
    width: Layout.window.width * 0.22,
    marginTop: Layout.window.height * 0.36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  bttnTxt:{
    fontSize:20,
    color:"#303030"
  }
});

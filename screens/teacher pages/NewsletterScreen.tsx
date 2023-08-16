import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import List from "../../components/List";
import Background from "../../components/Background";
import { HStack, VStack } from "native-base";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import SelectButton from "../../components/SelectButton";

export default function NewsletterScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"BÜLTENLER"} />
      <View>
        <Background title={"ANAOKUL BÜLTENİ"} />
        <View style={styles.bttnContainer}>
          <VStack space={5}>
            <SelectButton
              bttnTxt={"BİZ NEDEN DOĞAYIZ"}
              backgroundColor={"#A9248D"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"ORMAN BANYOSU NEDİR"}
              backgroundColor={"#521F5A"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"ORMAN BANYOSU NEDİR"}
              backgroundColor={"#FFCB06"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"ORMAN BANYOSU NEDİR"}
              backgroundColor={"#FF9410"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"ORMAN BANYOSU NEDİR"}
              backgroundColor={"#FF4C52"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
          </VStack>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bttnContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:Layout.window.height*0.15
  }
});

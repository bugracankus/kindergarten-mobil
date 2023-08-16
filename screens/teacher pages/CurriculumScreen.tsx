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

export default function CurriculumScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"DERS PROGRAMI"} />
      <View>
        <Background title={"HAFTALIK DERS PROGRAMI"} />
        <View style={styles.bttnContainer}>
          <VStack space={5}>
            <SelectButton
              bttnTxt={"HAFTALIK PLAN AKIŞI İNGİLİZCE"}
              backgroundColor={"#A9248D"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"HAFTALIK PLAN AKIŞI "}
              backgroundColor={"#521F5A"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"HAFTALIK PLAN AKIŞI İNGİLİZCE"}
              backgroundColor={"#FFCB06"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"HAFTALIK PLAN AKIŞI "}
              backgroundColor={"#FF9410"}
              textColor={"white"}
              navigation={undefined}
              navigate={undefined}
            />
              <SelectButton
              bttnTxt={"HAFTALIK PLAN AKIŞI İNGİLİZCE"}
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

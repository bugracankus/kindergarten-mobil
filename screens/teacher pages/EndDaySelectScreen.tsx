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
import CalendarDesign from "../../components/CalendarDesign";
import DaysContent from "../../components/DaysContent";

export default function EndDaySelectScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"GÜN SONU"} />
      <View>
        <Background title={"AYŞE BİNGÖL"} />
        <ScrollView>
          <View style={styles.content}>
            <CalendarDesign />
            <View style={styles.info}>
              <HStack padding={1.5}>
                <Text style={styles.infoDate}>04/08/2023</Text>
                <Text style={styles.infoName}>Ayşe Bingöl</Text>
              </HStack>
              <View style={styles.contentGround}>
                <DaysContent />
                <View style={styles.bttn}>
                  <Button
                    bttnTxt={"Gönder"}
                    backgroundColor={"#AA2193"}
                    textColor={"white"}
                    navigation={navigation}
                    navigate={"HomeScreenT"}
                  />
                </View>
              </View>
            </View>
          </View>
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
  content: {
    alignItems: "center",
    height: Layout.window.height * 1,
  },
  info: {
    backgroundColor: "#FFCB06",
    height: Layout.window.height * 0.04,
    width: Layout.window.width * 0.9,
    marginTop: Layout.window.height * 0.05,
  },
  infoDate: {
    fontSize: 22,
    color: "white",
  },
  infoName: {
    fontSize: 22,
    color: "white",
    marginLeft: Layout.window.width * 0.39,
  },
  contentGround: {
    marginTop: Layout.window.height * 0.02,
  },
  bttn:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:Layout.window.height*0.1,
    marginBottom:Layout.window.height*1,
  }
});

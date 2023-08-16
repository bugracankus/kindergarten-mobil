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

export default function FoodCalendar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"YEMEK TAKVİMİ"} />
      <View>
        <Background title={"TAKVİM"} />
        <View style={styles.calendar}>
          <CalendarDesign />
        </View>
        <View style={styles.infoGround}>
          <Text style={styles.infoTxt}>04/08/2023</Text>
        </View>
        <VStack
          style={{
            marginLeft: Layout.window.width * 0.08,
            marginTop: Layout.window.height * 0.01,
          }}
          space={2}
        >
          <View style={{ borderBottomWidth: 1.5, borderColor: "#DCDCDC" }}>
            <Text style={styles.title}>KAHVALTI ;</Text>
          </View>
          <VStack space={0.75}>
            <Text style={styles.txt}>Yumurta Kavurması</Text>
            <Text style={styles.txt}>Domates</Text>
            <Text style={styles.txt}>Peynir</Text>
          </VStack>
          <View style={{ borderBottomWidth: 1.5, borderColor: "#DCDCDC" }}>
            <Text style={styles.title}>ÖĞLEN ;</Text>
          </View>
          <VStack
            space={0.75}
          >
            <Text style={styles.txt}>Mercimek Çorbası</Text>
            <Text style={styles.txt}>Bulgur Pilavı</Text>
            <Text style={styles.txt}>Yoğurt</Text>
          </VStack>
          <View style={{ borderBottomWidth: 1.5, borderColor: "#DCDCDC" }}>
            <Text style={styles.title}>İKİNDİ KAHVALTISI ;</Text>
          </View>
          <VStack
            space={0.75}
          >
            <Text style={styles.txt}>Kurabiye</Text>
            <Text style={styles.txt}>Doğal Meyve Suyu</Text>
          </VStack>
        </VStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  calendar: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoGround: {
    height: Layout.window.height * 0.03,
    width: Layout.window.width * 0.9,
    marginTop: Layout.window.height * 0.05,
    marginLeft: Layout.window.width * 0.05,
    backgroundColor: "#FFCB06",
  },
  infoTxt: {
    fontSize: 20,
    color: "white",
    marginTop: Layout.window.height * 0.0055,
    marginLeft: Layout.window.width * 0.03,
  },
  title: {
    fontSize: 20,
    color: "#FF4C52",
  },
  txt: {
    fontSize: 17,
    color: "#303030",
  },
});

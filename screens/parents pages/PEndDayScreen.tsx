import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import Background from "../../components/Background";
import { HStack, VStack } from "native-base";
import Button from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import List from "../../components/List";

//parent end day screen design


const PEndDayScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"GÜN SONU"} />
      <View>
        <Background title={"AYŞE BİNGÖL"} />
        <View style={styles.hGround}>
          <Text style={styles.history}>18/08/2023</Text>
        </View>
        <VStack
          style={{
            width: Layout.window.width * 0.9,
            height: Layout.window.height * 0.6,
            alignSelf: "center",
            marginTop: Layout.window.height * 0.02
          }}
        >
          <ScrollView>

            <View style={styles.tGround}>
              <Text style={styles.title}>Branş Dersleri</Text>
            </View>
            <VStack>
              <HStack space={20} padding={2}>
                <Text style={styles.selecetContent}>İngilizce</Text>
                <Text style={styles.contentTxt}>Matematik</Text>
              </HStack>
              <HStack space={20} padding={2}>
                <Text style={styles.contentTxt}>Türkçe</Text>
                <Text style={styles.contentTxt}>Robotik Kodlama </Text>
              </HStack>
            </VStack>
            <View style={styles.tGround}>
              <Text style={styles.title}>Yarın Okula Getireceklerim</Text>
            </View>
            <VStack>
              <HStack space={20} padding={2}>
                <Text style={styles.contentTxt}>Oyuncak</Text>
                <Text style={styles.selecetContent}>Kitap</Text>
              </HStack>
              <HStack space={20} padding={2}>
                <Text style={styles.contentTxt}>Sebze</Text>
                <Text style={styles.contentTxt}>Meyve  </Text>
              </HStack>
            </VStack>
            <View style={styles.tGround}>
              <Text style={styles.title}>Bugün Yaptıklarım</Text>
            </View>
            <VStack>
              <HStack space={20} padding={2}>
                <Text style={styles.selecetContent}>Türkçe</Text>
                <Text style={styles.contentTxt}>Matematik</Text>
              </HStack>
              <HStack space={20} padding={2}>
                <Text style={styles.selecetContent}>Spor</Text>
                <Text style={styles.selecetContent}>Kendin Yap</Text>
              </HStack>
            </VStack>
            <View style={styles.tGround}>
              <Text style={styles.title}>Yemek</Text>
            </View>
            <VStack>
              <HStack space={20} padding={2}>
                <Text style={styles.contentTxt}>Hepsini Yedi</Text>
                <Text style={styles.contentTxt}>Yarısını Yedi</Text>
              </HStack>
              <HStack space={20} padding={2}>
                <Text style={styles.contentTxt}>Tadına Baktı</Text>
                <Text style={styles.contentTxt}>Yemedi Yap</Text>
              </HStack>
            </VStack>
          </ScrollView>

        </VStack>
      </View>
    </View>
  );
}
export default PEndDayScreen;
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
  hGround: {
    height: Layout.window.height * 0.03,
    marginTop: Layout.window.height * 0.14,
    width: Layout.window.width * 0.9,
    alignSelf: "center",
    backgroundColor: "#FFCB06"
  },
  history: {
    fontSize: 18,
    color: "white",
    marginTop: Layout.window.height * 0.0035,
    marginLeft: Layout.window.width * 0.02
  },
  content: {

  },
  title: {
    fontSize: 22,
    color: "#FF4C52",
    marginLeft: Layout.window.width * 0.02,
    letterSpacing: 1,

  },
  tGround: {
    borderBottomWidth: 2,
    borderColor: "#DCDCDC",
  },
  contentTxt: {
    fontSize: 22,
    color: "#303030",
    marginLeft: Layout.window.width * 0.005,
    width: Layout.window.width * 0.32,
  },
  selecetContent: {
    fontSize: 22,
    color: "red",
    marginLeft: Layout.window.width * 0.005,
    width: Layout.window.width * 0.32,
  }
});

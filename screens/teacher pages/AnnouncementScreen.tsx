import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import Background from "../../components/Background";
import { HStack, Input, VStack } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import AnnouncementBox from "../../components/AnnouncementBox";

export default function AnnouncementScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"DUYURULAR"} />
      <View>
        <Background title={"DUYURULARIM"} />
        <ScrollView
          style={{
            marginTop: Layout.window.height * 0.115,
            height: Layout.window.height * 1,
          }}
        >
          <View style={styles.listGround}>
            <VStack space={3}>
              <AnnouncementBox
                topic={"Yüzme Eğitimi"}
                history={"03 Temmuz 2023"}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                }
              />
               <AnnouncementBox
                topic={"Yüzme Eğitimi"}
                history={"03 Temmuz 2023"}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                }
              />
               <AnnouncementBox
                topic={"Yüzme Eğitimi"}
                history={"03 Temmuz 2023"}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                }
              />
            </VStack>
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
});

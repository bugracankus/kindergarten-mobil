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

const ParentMessageScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"VELİYE MESAJ"} />
      <View>
        <Background title={"ÖĞRENCİLERİM"} />
        <ScrollView>
          <View style={styles.listGround}>
            <VStack space={3}>
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
              <List name={"Ayşe Bingöl"} />
            </VStack>
            <VStack padding={3} space={4}>
              <Button
                bttnTxt={"Devam Et"}
                backgroundColor={"#AA2193"}
                textColor={"white"}
                navigation={navigation}
                navigate={"ParentMessageSelectScreen"}
              />
              <Button
                bttnTxt={"Tümünü Seç"}
                backgroundColor={"#AA2193"}
                textColor={"white"}
                navigation={undefined}
                navigate={undefined}
              />
              <Button
                bttnTxt={"Seçimleri Kaldır"}
                backgroundColor={"#AA2193"}
                textColor={"white"}
                navigation={undefined}
                navigate={undefined}
              />
            </VStack>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ParentMessageScreen;

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: Layout.window.height * 0.12,
  },
});

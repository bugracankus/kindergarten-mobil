import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Layout from "../constants/Layout";
import { HStack, Input, VStack } from "native-base";

interface DaysContentProps {}
export default function DaysContent(props: DaysContentProps) {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleGround}>
        <Text style={styles.title}>Branş Dersleri</Text>
      </View>
      <View>
        <HStack padding={2}>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>İngilizce</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Drama</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Modern Dans</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>İşaret Dili</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Zumba</Text>
              </TouchableOpacity>
            </VStack>
          </View>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>İngilizce</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Drama</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Modern Dans</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>İşaret Dili</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Zumba</Text>
              </TouchableOpacity>
            </VStack>
          </View>
        </HStack>
      </View>
      <View style={styles.titleGround}>
        <Text style={styles.title}>Yarın Okula Getireceklerim</Text>
      </View>
      <View>
        <HStack padding={2}>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Oyuncak</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Kitap</Text>
              </TouchableOpacity>
            </VStack>
          </View>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Puzzle</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Artık Materyal</Text>
              </TouchableOpacity>
            </VStack>
          </View>
        </HStack>
      </View>
      <View style={styles.titleGround}>
        <Text style={styles.title}>Bugün Yaptıklarım</Text>
      </View>
      <View>
        <HStack padding={2}>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Türkçe</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Matematik</Text>
              </TouchableOpacity>
            </VStack>
          </View>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Fen</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Hareket Eğitimi</Text>
              </TouchableOpacity>
            </VStack>
          </View>
        </HStack>
      </View>
      <View style={styles.titleGround}>
        <Text style={styles.title}>Kahvaltı</Text>
      </View>
      <View>
        <HStack padding={2}>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Hepsini Yedi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Tadına Baktı</Text>
              </TouchableOpacity>
            </VStack>
          </View>
          <View style={styles.container}>
            <VStack space={4} padding={2}>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Yarısını Yedi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.contentTxt}>Yemedi</Text>
              </TouchableOpacity>
            </VStack>
          </View>
        </HStack>
      </View>
      <VStack space={2}>
        <View>
          <View style={styles.titleGround}>
            <Text style={styles.title}>Etkinliklerimiz</Text>
          </View>
          <View style={styles.inpGround}>
            <Input style={styles.input} />
          </View>
        </View>
        <View>
          <View style={styles.titleGround}>
            <Text style={styles.title}>Öğretmenin Gün Sonu Notu</Text>
          </View>
          <View style={styles.inpGround}>
            <Input style={styles.input} />
          </View>
        </View>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#FF4C52",
    marginLeft: Layout.window.width * 0.02,
  },
  titleGround: {
    width: Layout.window.width * 0.85,
    borderBottomWidth: 2,
    borderColor: "#DCDCDC",
  },
  container: {
    width: Layout.window.width * 0.425,
  },
  contentTxt: {
    fontSize: 17,
    color: "#303030",
  },
  inpGround: {
    marginTop: Layout.window.height * 0.01,
    width: Layout.window.width * 0.85,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
  },
  input: {},
});

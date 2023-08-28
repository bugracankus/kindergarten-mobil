import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import Background from "../../components/Background";
import { HStack, Input, VStack } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import AnnouncementBox from "../../components/AnnouncementBox";
import axios from "axios";

export default function AnnouncementScreen() {
  const navigation = useNavigation();
  const [announcements, setAnnouncements] = useState([]);

  const getAnnouncements = () => {
    axios.get('https://epic-shortly-minnow.ngrok-free.app/api/announcements').then((res) => {
      console.log(res.data.announcements);
      if (res.data.type === "success") {
        setAnnouncements(res.data.announcements);
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
  }

  useEffect(() => {
    getAnnouncements();
  }, [])

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
              {
                announcements.map((item, index) => (
                  <AnnouncementBox
                    key={index}
                    topic={item.topic}
                    history={item.created_at}
                    content={item.announcement}
                  />
                ))
              }
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

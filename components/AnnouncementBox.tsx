import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Layout from "../constants/Layout";
import { HStack } from "native-base";
// Announcement box design
interface AnnouncementBoxProps {
  topic: string;
  history: string;
  content: string;
}
export default function AnnouncementBox(props: AnnouncementBoxProps) {
  return (
    <View style={styles.container}>
      <HStack space={1} padding={3}>
        <Text style={styles.txt}>Konu :</Text>
        <Text style={styles.txt}>{props.topic}</Text>
        <Text style={styles.date}>{props.history}</Text>
      </HStack>
      <Text style={styles.contentTxt}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.84,
    height: Layout.window.height * 0.14,
    borderRadius: 10,
    marginLeft: Layout.window.width * 0.08,
    backgroundColor: "#64BBD7",
  },
  mssgTxt: {
    width: Layout.window.width * 0.58,
    height: Layout.window.height * 0.1,
    fontSize: 13,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#D8D8D8",
    fontSize:18
  },
  date: {
    marginLeft: Layout.window.width * 0.16,
    color: "#D8D8D8",
  },
  contentTxt: {
    color: "#303030",
    width: Layout.window.width * 0.8,
    marginLeft: Layout.window.width * 0.03,
    fontSize:16,
  },
});

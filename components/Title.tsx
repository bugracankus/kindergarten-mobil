import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { HStack, VStack } from "native-base";
import Layout from "../constants/Layout";

interface TitleProps {
  title: string;
}
export default function Title(props: TitleProps) {
  return (
    <View style={styles.ground}>
      <HStack>
        <Text style={styles.title}>{props.title}</Text>
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  ground: {
    backgroundColor: "#FFCB06",
    height: Layout.window.height * 0.14,
    width: Layout.window.width * 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    letterSpacing: 1,
    marginTop: Layout.window.height * 0.08,
  },
  icon: {
    width: Layout.window.width * 0.06,
    height: Layout.window.width * 0.06,
    marginTop: Layout.window.height * 0.08,
    marginRight: Layout.window.width * 0.15,
  },
});

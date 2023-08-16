import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { HStack, VStack } from "native-base";
import Layout from "../constants/Layout";

interface ListProps {
  name: string;
}

export default function List(props: ListProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const containerStyle = [
    styles.container,
    isPressed ? { borderColor: "#FF9410" } : null,
  ];

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={containerStyle}>
        <HStack style={{ alignItems: "center" }}>
          <Text style={styles.name}>{props.name}</Text>
        </HStack>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.85,
    height: Layout.window.height * 0.05,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#DCDCDC",
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    color: "#303030",
    marginLeft: Layout.window.width * 0.03,
  },
});

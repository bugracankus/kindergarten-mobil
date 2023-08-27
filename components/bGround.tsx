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
import Layout from "../constants/Layout";

export default function bGround() {
    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground
                source={require("../../assets/Logo/logo1.png")}
                style={styles.logo}
            >
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logo: {
        width: Layout.window.width * 0.7,
        height: Layout.window.width * 0.7,
        alignSelf: "center",
        marginTop: Layout.window.height * 0.2
    },
    main: {
        borderWidth: 1,
        height: Layout.window.height * 1,
    }
});

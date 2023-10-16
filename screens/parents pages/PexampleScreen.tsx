import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import { HStack, VStack, useSafeArea } from "native-base";
import axios from "axios";

//Axios example screen.
//Fake Data url: https://random-data-api.com/api/users/random_user
const PexampleScreen = () => {
    const [data, setData]:any  = useState('');
    useEffect(() => {
        axios.get('https://random-data-api.com/api/users/random_user')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <View style={styles.container}>
            <Title title={"Axios Deneme Ekranı "} />
            <View style={styles.content}>
                <VStack space={3}>
                    <HStack style={{ alignItems: "center" }} space={5}>
                        <Text style={styles.cText}>Kullanıcı Adı:</Text>
                        <View style={styles.tGround}>
                            <Text style={styles.dText}>{"" + data.username}</Text>
                        </View>
                    </HStack>
                    <HStack style={{ alignItems: "center" }} space={5}>
                        <Text style={styles.cText}>Adı:</Text>
                        <View style={styles.tGround}>
                            <Text style={styles.dText}>{"" + data.first_name}</Text>
                        </View>
                    </HStack>
                    <HStack style={{ alignItems: "center" }} space={5}>
                        <Text style={styles.cText}>Soyadı:</Text>
                        <View style={styles.tGround}>
                            <Text style={styles.dText}>{"" + data.last_name}</Text>
                        </View>
                    </HStack>
                    <HStack style={{ alignItems: "center" }} space={5}>
                        <Text style={styles.cText}>E-Mail:</Text>
                        <View style={styles.tGround}>
                            <Text style={styles.dText}>{"" + data.email}</Text>
                        </View>
                    </HStack>
                </VStack>
            </View>
        </View>
    );
}
export default PexampleScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        marginTop: 40,
        marginLeft: 10,
    },
    tGround: {
        borderWidth: 1,
        height: 30,
        width: Layout.window.width * 0.6,
        borderRadius: 5,
        backgroundColor: "#F7F3EB",
        justifyContent: "center",
    },
    cText: {
        fontSize: 20,
        color: "#303030",
        width: 120,
    },
    dText: {
        fontSize: 17,
        marginLeft: 10
    }
});

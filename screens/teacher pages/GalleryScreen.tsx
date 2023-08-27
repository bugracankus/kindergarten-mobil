import React, { useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    PanResponder,
    Animated,
    ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import { HStack, VStack, Box } from "native-base";

export default function GalleryScreen() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const images = [
        require("../../assets/img/images1.jpeg"),
        require("../../assets/img/images2.jpeg"),
        require("../../assets/img/images3.jpeg"),
        require("../../assets/img/images4.jpeg"),
        require("../../assets/img/images5.jpeg"),
        require("../../assets/img/images6.jpeg"),
        require("../../assets/img/images1.jpeg"),
        require("../../assets/img/images2.jpeg"),
        require("../../assets/img/images3.jpeg"),
        require("../../assets/img/images4.jpeg"),
        require("../../assets/img/images5.jpeg"),
        require("../../assets/img/images6.jpeg"),
        require("../../assets/img/images1.jpeg"),
        require("../../assets/img/images2.jpeg"),
        require("../../assets/img/images3.jpeg"),
        require("../../assets/img/images4.jpeg"),
        require("../../assets/img/images5.jpeg"),
        require("../../assets/img/images6.jpeg"),
        require("../../assets/img/images1.jpeg"),
        require("../../assets/img/images2.jpeg"),
        require("../../assets/img/images3.jpeg"),
        require("../../assets/img/images4.jpeg"),
        require("../../assets/img/images5.jpeg"),
        require("../../assets/img/images6.jpeg"),
    ];

    const openImage = (imageIndex) => {
        setSelectedImage(imageIndex);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
            Animated.event([null, { dx: scrollX }], { useNativeDriver: false })(_, {
                dx: -dx,
            });
        },
    });

    const renderImages = () => {
        const rows = [];
        for (let i = 0; i < images.length; i += 3) {
            const rowImages = images.slice(i, i + 3);
            const imageRow = (
                <HStack key={i} padding={2} space={2}>
                    {rowImages.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => openImage(image)}>
                            <Image source={image} style={styles.img} />
                        </TouchableOpacity>
                    ))}
                </HStack>
            );
            rows.push(imageRow);
        }
        return rows;
    };

    return (
        <View style={styles.container}>
            <Title title={"GALERİ"} />
            <View>
                <ImageBackground
                    source={require("../../assets/Logo/logo1.png")}
                    style={styles.logo}
                />
                <View style={styles.main}>
                    <ScrollView>
                        <VStack>{renderImages()}</VStack>
                        <TouchableOpacity>
                        <View style={styles.bttn}>
                            <Text style={styles.bttnTxt}>Fotoğraf Çek</Text>
                        </View>
                    </TouchableOpacity>
                    </ScrollView>
                    

                </View>

            </View>

            {/* Büyük resmi gösteren modal */}
            {selectedImage !== null && (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={selectedImage !== null}
                    onRequestClose={closeImage}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeImage}>
                            <Text style={styles.closeButtonText}>Kapat</Text>
                        </TouchableOpacity>
                        <Animated.ScrollView
                            horizontal
                            pagingEnabled
                            scrollEventThrottle={16}
                            {...panResponder.panHandlers}
                        >
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    source={image}
                                    style={styles.selectedImage}
                                />
                            ))}
                        </Animated.ScrollView>
                    </View>
                </Modal>
            )}

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
        marginTop: Layout.window.height * 0.2,
    },
    main: {
        height: Layout.window.height * 1,
        marginTop: Layout.window.height * -0.5,
    },
    img: {
        width: Layout.window.width * 0.3,
        height: Layout.window.width * 0.3,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1,
        marginTop: 50,
    },
    closeButtonText: {
        color: "black",
        fontSize: 18,
    },
    selectedImage: {
        width: Layout.window.width,
        height: Layout.window.height,
        resizeMode: "contain",
    },
    bttn: {
        height: Layout.window.height * 0.05,
        width: Layout.window.width * 0.8,
        backgroundColor: "#AA2193",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        alignSelf: "center",
        marginBottom:100,
    },
    bttnTxt: {
        fontSize: 18,
        letterSpacing: 1,
        color: "white"
    }
});

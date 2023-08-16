import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack, Input, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../../constants/Layout";

const HomeScreenT = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HStack padding={7} style={{ height: Layout.window.height * 0.2 }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/Icon/menu.png")}
            />
          </TouchableOpacity>
          <ImageBackground
            style={styles.logo}
            source={require("../../assets/Logo/logo.png")}
            alt=""
          >
            <View style={styles.iconGround}>
              <Image
                source={require("../../assets/Icon/user.png")}
                style={styles.userIcon}
              />
            </View>
          </ImageBackground>
        </HStack>
        <View style={styles.contentGround}>
          <VStack padding={5} space={5}>
            <Text style={styles.txt}>ZEYTİN SINIFI</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ServicePage")}>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon1.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Servis Takibi</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("EndDayScreen")}>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon2.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Gün Sonu</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ParentMessageScreen")}>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon4.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Veliye Mesaj</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon5.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Galeri</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AnnouncementScreen")}>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon6.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Duyurular</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CurriculumScreen")}>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon8.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Ders Programı</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NewsletterScreen")}>

              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon9.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Bültenler</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("FoodCalendar")}>
              <View style={styles.bttn}>
                <HStack style={{ alignItems: "center" }} space={7}>
                  <View>
                    <Image
                      source={require("../../assets/Icon/icon10.png")}
                      style={styles.icon}
                      alt=""
                    />
                  </View>
                  <View>
                    <Text style={styles.bttnTxt}>Yemek Takvimi</Text>
                  </View>
                </HStack>
              </View>
            </TouchableOpacity>
          </VStack>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default HomeScreenT;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.4,
    marginLeft: Layout.window.width * 0.155,
  },
  iconGround: {
    width: Layout.window.width * 0.35,
    height: Layout.window.width * 0.35,
    marginLeft: Layout.window.width * 0.035,
    marginTop: Layout.window.height * 0.07,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4C52",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 1,
  },
  userIcon: {
    width: Layout.window.width * 0.25,
    height: Layout.window.width * 0.25,
  },
  contentGround: {
    height: Layout.window.height * 1,
    width: Layout.window.width * 1,
    backgroundColor: "#FF4C52",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    alignItems: "center",
  },
  txt: {
    fontSize: 19,
    color: "#303030",
    letterSpacing: 2,
    textAlign: "center",
  },
  bttn: {
    width: Layout.window.width * 0.85,
    height: Layout.window.height * 0.06,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
  },
  icon: {
    height: Layout.window.height * 0.05,
    width: Layout.window.height * 0.05,
    resizeMode: "contain",
    marginLeft: Layout.window.width * 0.05,
  },
  bttnTxt: {
    fontSize: 24,
    color: "#303030",
    letterSpacing: 1.5,
  },
});

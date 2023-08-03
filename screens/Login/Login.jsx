import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import img from "../../assets/Images/black_logo.png";
import footer from "../../assets/Images/footer.png";
import google from "../../assets/Images/google.png";
import fb from "../../assets/Images/fb.png";
import twitter from "../../assets/Images/twitter.png";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <SafeAreaView>
          <View>
            <View style={styles.login_banner}>
              <Image
                style={{
                  width: 300,
                  height: 200,
                }}
                source={img}
                alt="Login Banner"
              />
            </View>
            <View>
              <Text style={styles.login_heading}>Login</Text>
            </View>
            <View>
              <TextInput
                placeholder="Email"
                style={{
                  backgroundColor: "#fff",
                  marginHorizontal: 20,
                  padding: 0,
                }}
              />
              <TextInput
                placeholder="Password"
                style={{
                  backgroundColor: "#fff",
                  marginHorizontal: 20,
                  padding: 0,
                }}
              />
            </View>
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "right",
                    marginRight: 20,
                    marginTop: 10,
                    color: "#1D2226",
                    fontWeight: "400",
                  }}
                >
                  Forgot Password{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("temp")}>
              <Text
                style={{
                  textAlign: "center",
                  margin: 20,
                  backgroundColor: "#ddd",
                  padding: 10,
                }}
              >
                Temp button for Screens
              </Text>
            </TouchableOpacity>
            <View>
              <View>
                <LinearGradient
                  style={styles.btn}
                  colors={["#CC2D3A", "#5D2F13"]}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      letterSpacing: 0.5,
                    }}
                    onPress={() => navigation.navigate("home")}
                  >
                    Log in
                  </Text>
                </LinearGradient>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                Or login with{" "}
              </Text>
            </View>
          </View>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={google} alt="Google" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={fb} alt="facebook" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={twitter} alt="twitter" />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                color: "gray",
              }}
            >
              Don't Have an account ?{" "}
              <Text
                style={{ color: "#CC2D3A", fontWeight: "bold" }}
                onPress={() => navigation.navigate("signup")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
          <View>
            <Image
              source={footer}
              style={{
                width: "100%",
                marginTop: 20,
                bottom: 0,
              }}
              alt="Arabian Superstar"
            />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login_banner: {
    width: "100%",
    height: 270,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  login_heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 20,
    color: "#1D2226",
  },
  btn: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
  social_icon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#ddd",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "15%",
    marginTop: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;

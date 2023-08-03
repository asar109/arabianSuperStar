import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
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
const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <View>
          <View style={styles.signUp_banner}>
            <Image
              style={{
                width: 300,
                height: 200,
              }}
              source={img}
              alt="signUp Banner"
            />
          </View>
          <View>
            <Text style={styles.signUp_heading}>Sign Up</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 20,
                  marginTop: 10,
                  color: "gray",
                  fontWeight: "400",
                }}
              >
                or Sign up with{" "}
              </Text>
            </TouchableOpacity>
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
            <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
              <Text
                onPress={() => navigation.navigate("signup2")}
                style={{
                  color: "#fff",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: 0.5,
                }}
              >
                Next
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "gray",
              marginRight: 4,
            }}
          >
            Already Have an account ?{" "}
            <Text
              style={{ color: "#CC2D3A", fontWeight: "bold" }}
              onPress={() => navigation.navigate("login")}
            >
              Log in
            </Text>
          </Text>
        </View>
        <View>
          <Image
            source={footer}
            style={{
              width: "100%",
              marginTop: 20,
            }}
            alt="Arabian Superstar"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp_banner: {
    width: "100%",
    height: 408,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  signUp_heading: {
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

export default SignUp;

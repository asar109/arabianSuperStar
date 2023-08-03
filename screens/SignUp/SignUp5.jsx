import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import footer from "../../assets/Images/footer.png";
import Icon from "react-native-vector-icons/FontAwesome";
import img from "../../assets/Images/p1.png";

const SignUp5 = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUp_heading}>About me</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            mode="outlined"
            multiline={true}
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <Text style={styles.signUp_heading}>Photos</Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              {img ? (
                <Image style={styles.img_container} source={img} />
              ) : (
                <View style={styles.input_container}>
                  <Icon name="camera" size={20} />
                </View>
              )}
            </View>
            <View style={styles.input_container}>
              <Icon name="camera" size={20} />
            </View>
            <View style={styles.input_container}>
              <Icon name="camera" size={20} />
            </View>
            <View style={styles.input_container}>
              <Icon name="camera" size={20} />
            </View>
          </View>
        </View>

        <View>
          <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
            <Text
              onPress={() => navigation.navigate("confirmation")}
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
              marginTop: 50,
            }}
            alt="Arabian Superstar"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  signUp_heading: {
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: "600",
  },
  input: {
    margin: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    height: 160,
  },
  btn: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
  input_container: {
    width: 100,
    height: 120,
    borderColor: "#CC2D3A",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  img_container: {
    width: 100,
    height: 120,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

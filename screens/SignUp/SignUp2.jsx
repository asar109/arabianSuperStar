import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import footer from "../../assets/Images/footer.png";

const SignUp2 = ({ navigation }) => {
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
          <Text style={styles.signUp_heading}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <Text style={styles.signUp_heading}>User Name</Text>
          <TextInput
            value={userName}
            onChangeText={(text) => setUserName(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <Text style={styles.signUp_heading}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <Text style={styles.signUp_heading}>Mobile Number</Text>
          <TextInput
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <Text style={styles.signUp_heading}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            mode="outlined"
            secureTextEntry
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <Text style={styles.signUp_heading}>Re-type Password</Text>
          <TextInput
            value={retypePassword}
            onChangeText={(text) => setRetypePassword(text)}
            mode="outlined"
            secureTextEntry
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
            <Text
              onPress={() => navigation.navigate("signup3")}
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

export default SignUp2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  signUp_heading: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    margin: 5,
    marginHorizontal: 10,
  },
  btn: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
});

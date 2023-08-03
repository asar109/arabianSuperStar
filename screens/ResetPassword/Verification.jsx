import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import footer from "../../assets/Images/footer.png";
import { useNavigation } from "@react-navigation/native";

const Verification = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Text style={styles.resetPassword_heading}>
          A verification code is sent to your email
        </Text>
        <View>
          <Text style={styles.reset_heading}>Enter Code</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
      </View>
      <View>
        <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
          <Text
            onPress={() => navigation.navigate("newpassword")}
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
        <Image
          source={footer}
          style={{
            width: "100%",
            marginTop: 120,
          }}
          alt="Arabian Superstar"
        />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  resetPassword_heading: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginVertical: 60,
  },
  input: {
    margin: 5,
    marginHorizontal: 10,
  },
  btn: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 300,
    textAlign: "center",
  },
  reset_heading: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
});

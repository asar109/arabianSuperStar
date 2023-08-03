import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/Images/black_logo.png";

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginTop: 50,
          }}
          source={logo}
        />
      </View>
      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          textAlign: "center",
          marginVertical: 40,
        }}
      >
        Are You The One!
      </Text>
      <View
        style={{
          marginVertical: 40,
          borderRadius: 100,
          width: 200,
          height: 200,
          backgroundColor: "#fff",
        }}
      ></View>
      <View>
        <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
          <Text
            onPress={() => navigation.navigate("resetpassword")}
            style={{
              color: "#fff",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          >
            LETS'S GO
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
    width: 300,
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

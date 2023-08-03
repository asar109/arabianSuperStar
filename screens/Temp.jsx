import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Temp = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text style={styles.btn}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("votebucket")}>
        <Text style={styles.btn}>My Vote Buckets</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("comment")}>
        <Text style={styles.btn}>Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("editprofile")}>
        <Text style={styles.btn}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("buyvote")}>
        <Text style={styles.btn}>Buy Vote</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("carddetails")}>
        <Text style={styles.btn}>Card Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("terms")}>
        <Text style={styles.btn}>Terms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("faq")}>
        <Text style={styles.btn}>FAQs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Temp;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#CC2D3A",
    color: "#fff",
    padding: 10,
    margin: 10,
    textAlign: "center",
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});

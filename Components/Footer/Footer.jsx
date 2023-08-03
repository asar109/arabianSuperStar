import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Import the icon component
import { useNavigation } from "@react-navigation/native";
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <FontAwesome name="home" size={30} color="gray" />
      <FontAwesome
        name="user"
        onPress={() => navigation.navigate("profile")}
        size={30}
        color="gray"
      />
      <FontAwesome name="user" size={30} color="gray" />
      <FontAwesome name="user" size={30} color="gray" />
      <FontAwesome name="user" size={30} color="gray" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

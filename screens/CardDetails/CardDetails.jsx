import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import footer from "../../assets/Images/footer.png";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";

const CardDetails = () => {
  const [cardNumber, setCardNumber] = React.useState("");
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Image
          style={styles.banner_pic}
          source={require("../../assets/Images/Content.png")}
        />
        <View>
          <Text style={styles.heading}>Card Number</Text>
          <View style={styles.inputContainer}>
            <Icon name="dial-pad" size={24} color="gray" style={styles.icon} />
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              maxLength={16}
              style={styles.input}
              outlineStyle={{ borderColor: "#F4F5F7", borderRadius: 30 }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Cardholder Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              style={styles.input}
              outlineStyle={{ borderColor: "#F4F5F7", borderRadius: 30 }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Cardholder Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              maxLength={16}
              style={styles.input}
              outlineStyle={{ borderColor: "#F4F5F7", borderRadius: 30 }}
            />
          </View>
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

export default CardDetails;

const styles = StyleSheet.create({
  banner_pic: {
    width: "100%",
    resizeMode: "contain",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 200,
    maxWidth: "38%",
    backgroundColor: "#fff",
    paddingTop: 100,
    position: "relative",
    borderRadius: 20,
    elevation: 5,
    marginHorizontal: 15,
    marginVertical: 25,
  },
  Price: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 5,
    paddingHorizontal: 10,
    color: "gray",
  },
  votes: {
    position: "absolute",
    top: -20,
    left: 15,
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#F4F5F7",
  },
  btn: {
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F5F7",
    borderRadius: 30,
    marginHorizontal: 20,
  },
  icon: {
    paddingLeft: 30,
  },
});

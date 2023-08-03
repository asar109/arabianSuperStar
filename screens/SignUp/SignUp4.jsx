import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import footer from "../../assets/Images/footer.png";
import { useNavigation } from "@react-navigation/native";

const SignUp4 = () => {
  const navigation = useNavigation();
  const [hobbies, setHobbies] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUp_heading}>
            Hobbies
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                fontWeight: "normal",
                marginLeft: 10,
              }}
            >
              {" "}
              (e.g, Football, Music, Reading, Dancing, etc.)
            </Text>
          </Text>
          <TextInput
            value={hobbies}
            onChangeText={(text) => setHobbies(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginVertical: 30,
          }}
        >
          <Text style={styles.hobby}>Arabian SuperStar</Text>
          <Text style={styles.hobby}>Popular Choice</Text>
          <Text style={styles.hobby}>Fashion Style icon</Text>
          <Text style={styles.hobby}>Pure Talent</Text>
          <Text style={styles.hobby}>The Gentlement</Text>
          <Text style={styles.hobby}>Pageant King</Text>
        </View>
        <View>
          <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
            <Text
              onPress={() => navigation.navigate("signup5")}
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
              marginTop: 200,
              bottom: 0,
            }}
            alt="Arabian Superstar"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  signUp_heading: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: "600",
    marginTop: 80,
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
  gender_btn: {
    width: 140,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
    borderWidth: 1,
    backgroundColor: "#cc2d3a",
    borderColor: "#CC2D3A",
    color: "#fff",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "15%",
  },
  gender_btn: {
    borderWidth: 2,
    borderColor: "#CC2D3A",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  genderText: {
    fontSize: 16,
    color: "#000",
  },
  selectedGender: {
    backgroundColor: "#CC2D3A",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "15%",
  },
  bd_input: {
    width: "30%",
    height: 40,
    borderWidth: 1,
    borderColor: "#CC2D3A",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  hobby: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
    fontWeight: "600",
    backgroundColor: "#CC2D3A",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    textAlign: "center",
  },
});

export default SignUp4;

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

const SignUp3 = () => {
  const navigation = useNavigation();
  const [country, setCountry] = useState();
  const [nationality, setNationality] = useState();
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [zodiac, setZodiac] = useState("");

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleDayChange = (text) => {
    setDay(text);
  };

  const handleMonthChange = (text) => {
    setMonth(text);
  };

  const handleYearChange = (text) => {
    setYear(text);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUp_heading}>Country of Residence</Text>
          <View
            style={{
              borderColor: "#CC2D3A",
              borderWidth: 1,
              borderRadius: 15,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={country}
              onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
              selectionColor={"#CC2D3A"}
              dropdownIconColor={"#CC2D3A"}
              style={{
                borderWidth: 3,
                borderColor: "#CC2D3A",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <Picker.Item label="Select country " value="" />
              <Picker.Item label="Pakistan" value="pakistan" />
              <Picker.Item label="India" value="india" />
            </Picker>
          </View>
        </View>
        <View>
          <Text style={styles.signUp_heading}>Nationality</Text>
          <View
            style={{
              borderColor: "#CC2D3A",
              borderWidth: 1,
              borderRadius: 15,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Picker
              selectedValue={country}
              onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
              selectionColor={"#CC2D3A"}
              dropdownIconColor={"#CC2D3A"}
              style={{
                borderWidth: 3,
                borderColor: "#CC2D3A",
                borderRadius: 15,
                padding: 10,
              }}
            >
              <Picker.Item label="Select Nationality " value="" />
              <Picker.Item label="Pakistani" value="pakistani" />
              <Picker.Item label="Indian" value="indian" />
            </Picker>
          </View>
        </View>
        <View>
          <Text style={styles.signUp_heading}>Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.gender_btn,
                gender === "male" ? styles.selectedGender : null,
              ]}
              onPress={() => handleGenderSelection("male")}
            >
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.gender_btn,
                gender === "female" ? styles.selectedGender : null,
              ]}
              onPress={() => handleGenderSelection("female")}
            >
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.signUp_heading}>Date of Birth</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.bd_input}
              placeholder="DD"
              maxLength={2}
              keyboardType="numeric"
              underlineColor="transparent"
              value={day}
              onChangeText={handleDayChange}
            />
            <TextInput
              style={styles.bd_input}
              placeholder="MM"
              selectTextOnFocus={false}
              underlineColor="transparent"
              maxLength={2}
              keyboardType="numeric"
              selectionColor="#CC2D3A"
              value={month}
              onChangeText={handleMonthChange}
            />
            <TextInput
              style={styles.bd_input}
              placeholder="YYYY"
              maxLength={4}
              keyboardType="numeric"
              underlineColor="transparent"
              value={year}
            />
          </View>
        </View>
        <View>
          <Text style={styles.signUp_heading}>Zodiac</Text>
          <TextInput
            value={zodiac}
            onChangeText={(text) => setZodiac(text)}
            mode="outlined"
            style={styles.input}
            outlineStyle={{ borderColor: "#CC2D3A", borderRadius: 15 }}
          />
        </View>
        <View>
          <LinearGradient style={styles.btn} colors={["#CC2D3A", "#5D2F13"]}>
            <Text
              onPress={() => navigation.navigate("signup4")}
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
              marginTop: 60,
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
});

export default SignUp3;

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import footer from "../../assets/Images/footer.png";

const EditProfile = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
          Edit Profile
        </Text>
        <TextInput
          style={styles.input}
          label="Full Name"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="Date of Birth"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="Gender"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="Email"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="Mobile Number"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="Country of Residence"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="Nationality"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
        <TextInput
          style={styles.input}
          label="My Vote Bucket"
          activeUnderlineColor="#CC2D3A"
          mode="flat"
        />
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
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
});

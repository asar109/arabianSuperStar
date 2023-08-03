import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import FAQAccordion from "./FAQAccordion.jsx";

const FAQScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        FAQ
      </Text>
      <FAQAccordion
        question="lorem ipsum dolor sit amet?"
        answer="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQAccordion
        question="lorem ipsum dolor sit amet?"
        answer="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQAccordion
        question="lorem ipsum dolor sit amet?"
        answer="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQAccordion
        question="lorem ipsum dolor sit amet?"
        answer="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Add more FAQ items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default FAQScreen;

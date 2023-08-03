import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutAnimation,
} from "react-native";

const FAQAccordion = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, answer.length * 20],
    }),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.questionContainer} onPress={handleToggle}>
        <Text style={styles.questionText}>{question}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <Animated.View style={[styles.answerContainer, animatedStyle]}>
          <Text style={styles.answerText}>{answer}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  questionContainer: {
    paddingHorizontal: 6,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  answerContainer: {
    overflow: "hidden",
    paddingHorizontal: 16,
  },
  answerText: {
    fontSize: 14,
    paddingVertical: 10,
  },
});

export default FAQAccordion;

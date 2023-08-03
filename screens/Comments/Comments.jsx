import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Comments = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <View>
            <Image
              style={styles.comment_profile}
              source={require("../../assets/Images/profile.png")}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.comment_User}>User Name</Text>
            <Text style={styles.comment_text}>
              This is a comment Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ut, illum.
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <View>
            <Image
              style={styles.comment_profile}
              source={require("../../assets/Images/profile.png")}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.comment_User}>User Name</Text>
            <Text style={styles.comment_text}>
              This is a comment Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ut, illum.
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 100,
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Type a message..."
          underlineColor="#fff"
          style={styles.comment_input}
          activeUnderlineColor="#fff"
        />
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  comment_profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 10,
  },
  comment_User: {
    fontSize: 16,
    fontWeight: "bold",
  },
  comment_text: {
    fontSize: 14,
    color: "gray",
    width: 250,
  },
  comment_input: {
    backgroundColor: "#fff",
    width: 300,
    height: 50,
    borderRadius: 100,
  },
});

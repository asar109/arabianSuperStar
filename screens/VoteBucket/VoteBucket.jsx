import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import footer from "../../assets/Images/footer.png";
const VoteBucket = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 22,
        }}
      >
        My Vote Bucket
      </Text>
      <Image
        style={styles.profile_img}
        source={require("../../assets/Images/profile.png")}
      />
      <Text style={styles.profile_name}>Hiba Ahmed</Text>
      <Text style={styles.profile_email}>@hiba-ahmed27</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Icon
          name="map-marker-alt"
          style={{
            marginRight: 8,
          }}
          size={20}
          color="gray"
        />
        <Text>Kuwait</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={{
            marginVertical: 10,
          }}
          source={require("../../assets/Images/vote.png")}
        />
      </TouchableOpacity>
      <Text style={styles.vote}>
        Available Votes: <Text style={{ fontWeight: "bold" }}>5</Text>
      </Text>

      <Text
        style={{
          fontWeight: "bold",
          color: "#CC2D3A",
          marginVertical: 10,
          fontSize: 18,
        }}
      >
        My Vote
      </Text>

      <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
        Vote Me
      </Text>
      <View>
        <Image
          source={footer}
          style={{
            width: 650,
            marginTop: 100,
          }}
          alt="Arabian Superstar"
        />
      </View>
    </View>
  );
};

export default VoteBucket;

const styles = StyleSheet.create({
  profile_img: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 100,
  },
  profile_name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  profile_email: {
    marginVertical: 5,
    color: "gray",
  },
  vote: {
    marginVertical: 5,
  },
});

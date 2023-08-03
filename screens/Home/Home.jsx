import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import img from "../../assets/Images/p3.png";
import footer from "../../assets/Images/footer.png";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        <Image
          source={footer}
          style={{
            width: "100%",
          }}
          alt="Arabian Superstar"
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginHorizontal: 20,
            marginVertical: 20,
            textAlign: "center",
          }}
        >
          TOP CONTESTANT
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
            elevation: 3,
            flexWrap: "wrap",
            paddingHorizontal: 10,
          }}
        >
          <LinearGradient
            colors={["#E7C927", "#B65426"]}
            style={{
              borderColor: "#CC2D3A",
              borderWidth: 0,
              borderRadius: 50,
              width: 100,
              height: 100,
              position: "relative",
            }}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                position: "absolute",
                top: 10,
                borderRadius: 50,

                left: 10,
              }}
              source={img}
              alt="Login Banner"
            />
          </LinearGradient>
          <Text>Name</Text>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.profile_data}>
          <Image
            style={styles.profile_img}
            source={require("../../assets/Images/p2.png")}
          />
          <View
            style={{
              justifyContent: "flex-start",
              marginLeft: 10,
            }}
          >
            <Text style={styles.profile_name}>Name</Text>
            <Text style={styles.profile_location}>Location</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        <Image
          style={styles.gallery_img}
          source={require("../../assets/Images/1.png")}
        />
        <Image
          style={styles.gallery_img}
          source={require("../../assets/Images/2.png")}
        />
        <Image
          style={styles.gallery_img}
          source={require("../../assets/Images/3.png")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  profile_data: {
    flexDirection: "row",
  },
  profile_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profile_name: {
    fontWeight: "bold",
  },
  gallery_img: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

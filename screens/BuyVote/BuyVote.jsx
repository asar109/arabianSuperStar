import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import footer from "../../assets/Images/footer.png";

const BuyVote = () => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Image
          style={styles.banner_pic}
          source={require("../../assets/Images/bg.png")}
        />
        <Text style={styles.heading}>Buy Vote</Text>
        <View style={styles.container}>
          <View style={styles.box}>
            <LinearGradient
              colors={["#E7C927", "#B65426"]}
              style={styles.votes}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                10 Votes
              </Text>
            </LinearGradient>
            <Text style={styles.Price}>USD 1</Text>
            <Text style={styles.paragraph}>
              Buy vote and you may win crash prizes
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#FEC42D",
                }}
              >
                Click to Buy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <LinearGradient
              colors={["#E7C927", "#B65426"]}
              style={styles.votes}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                25 Votes
              </Text>
            </LinearGradient>
            <Text style={styles.Price}>USD 5 </Text>
            <Text style={styles.paragraph}>
              Buy vote and you may win crash prizes
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#FEC42D",
                }}
              >
                Click to Buy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <LinearGradient
              colors={["#E7C927", "#B65426"]}
              style={styles.votes}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                50 Votes
              </Text>
            </LinearGradient>
            <Text style={styles.Price}>USD 10</Text>
            <Text style={styles.paragraph}>
              Buy vote and you may win crash prizes
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#FEC42D",
                }}
              >
                Click to Buy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <LinearGradient
              colors={["#E7C927", "#B65426"]}
              style={styles.votes}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                60 Votes
              </Text>
            </LinearGradient>
            <Text style={styles.Price}>USD 15</Text>
            <Text style={styles.paragraph}>
              Buy vote and you may win crash prizes
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#FEC42D",
                }}
              >
                Click to Buy
              </Text>
            </TouchableOpacity>
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

export default BuyVote;

const styles = StyleSheet.create({
  banner_pic: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
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
});

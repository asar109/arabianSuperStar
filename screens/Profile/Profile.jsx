import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import profile_pc from "../../assets/Images/profile.png";
import vote from "../../assets/Images/vote.png";
import star from "../../assets/Images/star.png";
import like from "../../assets/Images/like.png";
import comments from "../../assets/Images/comment.png";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import starVector from "../../assets/Images/star.png";
import pic1 from "../../assets/Images/p1.png";
import pic2 from "../../assets/Images/p2.png";
import pic3 from "../../assets/Images/p3.png";
import footer from "../../assets/Images/footer.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av";
import VideoPlayer from "../../Components/Video/VideoPlayer";

const Profile = () => {
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});

  // Function to handle video playback
  const handleVideoPlay = async () => {
    if (videoRef) {
      const playbackStatus = await videoRef.current.getStatusAsync();

      if (playbackStatus.isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
    }
  };
  const vLink = "../../assets/videos/song.mp4";
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View>
          <Image
            source={profile_pc}
            style={styles.profilePic}
            alt="Profile Photo"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={styles.profile_details}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>135</Text>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 14 }}>
              Vote
            </Text>
            <TouchableOpacity>
              <AntDesign
                name="like2"
                style={styles.icons_btn}
                size={30}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profile_details}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>4,654</Text>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 14 }}>
              Likes
            </Text>
            <TouchableOpacity>
              <AntDesign
                name="like2"
                style={styles.icons_btn}
                size={30}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profile_details}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>88</Text>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 14 }}>
              Comments
            </Text>
            <TouchableOpacity>
              <Material
                name="wechat"
                style={styles.icons_btn}
                size={30}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profile_details}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>54</Text>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 14 }}>
              Ratings
            </Text>
            <TouchableOpacity>
              <AntDesign
                name="staro"
                style={styles.icons_btn}
                size={30}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Hiba Ahmed
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
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
        </View>
        <Text
          style={{
            marginHorizontal: 16,
            color: "gray",
          }}
        >
          @hibaahmed
        </Text>

        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 16,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Profile
        </Text>
        <Text
          style={{
            marginHorizontal: 16,
            color: "gray",
            textAlign: "justify",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Text>
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 16,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Nominations
        </Text>
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text style={styles.nomination}>Arabian SuperStar</Text>
        </View>
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 16,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Photo
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Image source={pic1} style={styles.photo} alt="photo" />
          <Image source={pic2} style={styles.photo} alt="photo" />
          <Image source={pic3} style={styles.photo} alt="photo" />
          <Image source={pic2} style={styles.photo} alt="photo" />
          <Image source={pic3} style={styles.photo} alt="photo" />
          <Image source={pic2} style={styles.photo} alt="photo" />
          <Image source={pic3} style={styles.photo} alt="photo" />
          <Image source={pic2} style={styles.photo} alt="photo" />
        </View>
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 16,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Video
        </Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleVideoPlay}>
            <Video
              ref={videoRef}
              source={require("../../assets/videos/song.mp4")}
              style={styles.videoPlayer}
              resizeMode="contain"
              useNativeControls={false}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            {!status.isPlaying && (
              <View style={styles.playPauseButton}>
                {status.isPlaying ? (
                  <MaterialIcons name="pause" size={30} color="white" />
                ) : (
                  <MaterialIcons name="play-arrow" size={30} color="white" />
                )}
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={footer}
            style={{
              width: "100%",
              marginTop: 20,
              bottom: 0,
              left: 0,
            }}
            alt="Arabian Superstar"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePic: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profile_details: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  icons_btn: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginVertical: 20,
  },
  nomination: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#CC2D3A",
    color: "#fff",
    borderRadius: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  photo: {
    width: "33%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  videoPlayer: {
    width: 330,
    height: 200,
  },
  playPauseButton: {
    position: "absolute",
    top: "40%", // Adjust this value to center the buttons vertically
    left: "38%", // Adjust this value to center the buttons horizontally
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 10,
    borderRadius: 30,
  },
});

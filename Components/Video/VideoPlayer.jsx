import React, { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

const VideoPlayer = ({ videoLink }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoStatus, setVideoStatus] = useState(null);

  const handleVideoPlay = async () => {
    if (videoRef) {
      const playbackStatus = await videoRef.current.getStatusAsync();

      if (playbackStatus.isPlaying) {
        await videoRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await videoRef.current.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const onLoadError = (error) => {
    console.log("Error loading video:", error);
    setVideoStatus("Error loading video");
  };

  return (
    <View style={styles.container}>
      {videoLink ? (
        <>
          <TouchableOpacity onPress={handleVideoPlay}>
            <Video
              ref={videoRef}
              source={{ uri: videoLink }}
              style={styles.videoPlayer}
              resizeMode="contain"
              useNativeControls={false}
              onPlaybackStatusUpdate={(status) =>
                setIsPlaying(status.isPlaying)
              }
              onError={onLoadError}
            />
            {!isPlaying && !videoStatus && (
              <View style={styles.playPauseButton}>
                {isPlaying ? (
                  <MaterialIcons name="pause" size={30} color="white" />
                ) : (
                  <MaterialIcons name="play-arrow" size={30} color="white" />
                )}
              </View>
            )}
          </TouchableOpacity>
          {videoStatus && (
            <Text style={styles.errorMessage}>{videoStatus}</Text>
          )}
        </>
      ) : (
        <Text style={styles.errorMessage}>
          Please provide a valid video link.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  videoPlayer: {
    width: 300,
    height: 200,
  },
  playPauseButton: {
    position: "absolute",
    top: "45%", // Adjust this value to center the buttons vertically
    left: "45%", // Adjust this value to center the buttons horizontally
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 30,
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
  },
});

export default VideoPlayer;

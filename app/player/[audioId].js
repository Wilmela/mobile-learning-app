import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  useWindowDimensions,
} from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Stack } from "expo-router";

import { useSearchParams } from "expo-router";
import { FONTS, SIZES } from "../../constants/theme";
import audioLink from "../../constants/audioData";
import { audioImage } from "../../assets/images";

const AudioPlayer = () => {
  const { width, height } = useWindowDimensions();
  const { audioId } = useSearchParams();

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(audioLink[audioId].uri);
      setSound(sound);
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    };

    if (audioId) {
      loadSound();
    }

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [audioId]);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    }
  };

  const playSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFastForward = async () => {
    if (sound) {
      const newPosition = position + 10000; // 10 seconds forward (adjust as needed)
      const isPlaying = await sound.getStatusAsync();

      if (newPosition < duration) {
        await sound.setPositionAsync(newPosition);
        if (isPlaying) {
          await sound.playAsync();
        }
      }
    }
  };

  const handleRewind = async () => {
    if (sound) {
      const newPosition = position - 10000; // 10 seconds backward (adjust as needed)
      const isPlaying = await sound.getStatusAsync();

      if (newPosition >= 0) {
        await sound.setPositionAsync(newPosition);
        if (isPlaying) {
          await sound.playAsync();
        }
      }
    }
  };

  const iconColor = "#000";
  return (
    <View
      style={{
        width,
        height,
        alignItems: "center",
        backgroundColor: "rgb(244, 243, 246)",
      }}
    >
      <Stack.Screen
        options={{
          title: `${audioLink[audioId].title}`,
          headerShadowVisible: false,
        }}
      />
      <View className="w-full h-[30%] items-center justify-center rounded-md">
        <Image
          source={audioImage}
          resizeMode="contain"
          style={{ width: "100%", maxHeight: height * 0.4 }}
        />
      </View>
      {/* Title */}
      <View
        className={`bg-[#000] opacity-70 px-4  justify-center items-center h-[50px] rounded-md mb-5
        }`}
        style={{
          marginTop: height * 0.05,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.Light,
            fontSize: SIZES.Normal,
          }}
          className="text-gray-300"
        >
          {audioLink[audioId].title}
        </Text>
      </View>
      {audioId ? (
        <View className="w-full flex-row items-center justify-evenly">
          <Foundation
            name="rewind"
            size={width * 0.15}
            color={iconColor}
            onPress={handleRewind}
          />
          <Ionicons
            name={!isPlaying ? "play" : "pause"}
            size={width * 0.15}
            color={iconColor}
            onPress={playSound}
          />
          <Foundation
            name="fast-forward"
            size={width * 0.15}
            color={iconColor}
            onPress={handleFastForward}
          />
        </View>
      ) : (
        Alert.alert("Stop!", "Load up an audio file from the playlist", [
          { text: "okay", style: "destructive", onPress: () => {} },
        ])
      )}
    </View>
  );
};

export default AudioPlayer;

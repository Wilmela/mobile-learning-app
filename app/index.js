import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Linking,
  KeyboardAvoidingView,
} from "react-native";
import { SearchInput, QuizList, Subjects } from "../components";
import { Stack, SplashScreen } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, FONTS } from "../constants/theme";
import { owner } from "../assets/images";
import { AppContextProvider } from "../context";
const Home = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);
  return (
    <>
      {!isReady && <SplashScreen />}
      <AppContextProvider>
        <SafeAreaView className="p-4" style={{ flex: 1 }}>
          <Stack.Screen
            options={{
              headerShadowVisible: false,
              title: "",

              headerLeft: ({ color }) => {
                return (
                  <Ionicons
                    name="md-information-circle-outline"
                    size={28}
                    color={color}
                    onPress={() =>
                      alert(
                        "This is a mobile learning application for NTC-II Block Laying and Concreting Craft Students in Technical Colleges."
                      )
                    }
                  />
                );
              },

              headerRight: () => {
                return (
                  <View className="flex-row items-center space-x-2">
                    <Text
                      style={{
                        fontFamily: FONTS.Medium,
                        fontSize: SIZES.Small,
                      }}
                      onPress={() => Linking.openURL("tel:2348162534817")}
                    >
                      call Nnadi
                    </Text>
                    <Image
                      source={owner}
                      className="w-10 h-10 rounded-full"
                      resizeMode="contain"
                    />
                  </View>
                );
              },
            }}
          />
          <KeyboardAvoidingView>
            <Text
              style={{
                fontFamily: FONTS.Bold,
                fontSize: SIZES.Large,
                color: "#000",
                marginBottom: 5,
              }}
            >
              Welcome to <Text className="text-ACCENT text-3xl">CLASS!</Text>
            </Text>
            <SearchInput />
            <QuizList />
            <Subjects />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </AppContextProvider>
    </>
  );
};

export default Home;
// eas build -p android --profile preview

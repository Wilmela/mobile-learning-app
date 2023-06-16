import {
  View,
  Text,
  FlatList,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
} from "react-native";
import subjects from "../constants/subjects";
import { FONTS, SIZES } from "../constants/theme";
import { Ionicons, Foundation } from "@expo/vector-icons";
import Footer from "./Footer";
import { useAppContext } from "../context";
// import { useStore } from "../store";
import { useRouter } from "expo-router";

const Subjects = () => {
  const { width, height } = useWindowDimensions();
  const { searchTerm } = useAppContext();
  const router = useRouter();

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.subject.includes(searchTerm) ||
      subject.subject.startsWith(searchTerm)
  );

  return (
    <KeyboardAvoidingView
      style={{
        marginVertical: width * 0.06,
        width: "100%",
        paddingBottom: height / 1.3,
      }}
    >
      <Text
        className="mb-2 text-DARK_GRAY"
        style={{
          fontFamily: FONTS.Medium,
          fontSize: SIZES.Normal,
        }}
      >
        Study the followings
      </Text>

      {/* Subjects List */}
      <FlatList
        data={filteredSubjects}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded-md overflow-hidden"
            onPress={() => router.push(`/subject/${item.subject}`)}
            style={{
              width: width * 0.91,
              height: height / 2.3,
            }}
          >
            <ImageBackground
              source={item.cover}
              resizeMode="cover"
              className="w-full h-full relative"
            >
              <View className="w-full bg-[#000] opacity-70 px-1 h-[30%] justify-center absolute bottom-0">
                <Text
                  className="text-white pl-4"
                  style={{
                    fontFamily: FONTS.Medium,
                    fontSize: SIZES.Large + 2,
                  }}
                >
                  {item.subject}
                </Text>
              </View>

              <View className="absolute top-5 right-5">
                {/* Video */}
                <View className="w-10 h-10 right-8 rounded-full bg-ACCENT items-center justify-center">
                  <Ionicons
                    name="md-videocam"
                    size={24}
                    color="#fff"
                    onPress={() =>
                      Linking.openURL(
                        `https://www.youtube.com/results?search_query=${item.video}`
                      )
                    }
                  />
                </View>

                {/* Audio */}
                <View className="right-16 w-10 h-10 rounded-full bg-ACCENT items-center justify-center">
                  <Ionicons
                    name="md-play-circle"
                    size={24}
                    color="#fff"
                    onPress={() => router.push(`/player/${item.audioId}`)}
                  />
                </View>

                {/* Web */}
                <View className="w-10 h-10 bottom-10 rounded-full bg-ACCENT items-center justify-center">
                  <Foundation
                    name="web"
                    size={24}
                    color="#fff"
                    onPress={() => Linking.openURL("https://www.google.com/")}
                  />
                </View>
                <View className="w-10 h-10 right-8 bottom-8 rounded-full bg-ACCENT items-center justify-center">
                  <Ionicons
                    name="mail"
                    size={24}
                    color="#fff"
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${item.email}?subject=Question on ${item.subject}`
                      )
                    }
                  />
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.subject}
        contentContainerStyle={{
          gap: 10,
        }}
        ListFooterComponent={() => {
          return <Footer />;
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default Subjects;

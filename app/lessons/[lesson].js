import {
  View,
  Text,
  ImageBackground,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Stack, useSearchParams } from "expo-router";
import lessonData from "../../constants/lessonData";
import { mock } from "../../assets/images";
import { FONTS, SIZES } from "../../constants/theme";

const Lesson = () => {
  const { lesson } = useSearchParams();
  const { width, height } = useWindowDimensions();

  const data = lessonData.find((item) => (item.topic === lesson ? item : null));

  return (
    <View>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: `${lesson}`,
        }}
      />
      <View>
        <ImageBackground
          source={data.bgImg}
          resizeMode="cover"
          style={{
            width,
            height: height * 0.3,
            paddingHorizontal: width * 0.05,
            position: "relative",
          }}
        >
          <View className="w-screen bg-[#000] opacity-70 px-1 h-[30%] justify-center absolute bottom-0">
            <Text
              className="text-white pl-4"
              style={{
                fontFamily: FONTS.Medium,
                fontSize: SIZES.Large,
              }}
            >
              {data.topic}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: width * 0.05,
          paddingBottom: height * 0.35,
        }}
      >
        {data.content && data.content()}
      </ScrollView>
    </View>
  );
};

export default Lesson;

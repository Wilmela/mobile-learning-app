import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import quizData from "../constants/quizList";
import { FONTS, SIZES, SPACING } from "../constants/theme";
import { useRouter } from "expo-router";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ForceTouchGesture } from "react-native-gesture-handler";
import { useLayoutEffect, useState } from "react";


const QuizList = () => {
  const { width, height } = useWindowDimensions();
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const [selected, setSelected] = useState(false);

  const progress = useSharedValue(0);
  const scale = useSharedValue(0.5);

  const derivedProgress = useDerivedValue(() => {
    return selected ? withTiming(1) : withTiming(0);
  }, [selected]);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }],
    };
  }, []);

  //BackgroundColor anime
  const rBgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      derivedProgress.value,
      [0, 1],
      ["#E56050", "red"]
    );
    return { backgroundColor };
  }, []);

  useLayoutEffect(() => {
    progress.value = withTiming(1);
    scale.value = withTiming(1);
  }, []);

  const router = useRouter();
  return (
    <View
      style={{
        marginVertical: width * 0.06,
      }}
    >
      <Text
        className="mb-2 text-DARK_GRAY"
        style={{
          fontFamily: FONTS.Medium,
          fontSize: SIZES.Normal,
        }}
      >
        Test your knowledge
      </Text>

      {/* Quiz Menu */}
      <FlatList
        data={quizData}
        renderItem={({ item }) => (
          <AnimatedTouchable
            activeOpacity={0.7}
            className="rounded-md relative justify-center items-center bg-ACCENT overflow-hidden"
            onPress={() => {
              setSelected((prev) => !prev);
              router.push(`/quiz/${item.quiz}`);
            }}
            style={[
              // rStyle,
              // rBgStyle,
              { width: width * 0.29, height: height * 0.16 },
            ]}
          >
            <Image
              source={item.cover}
              resizeMode="contain"
              className="w-12 h-12 rounded-full my-4 absolute top-0"
            />
            <View className="w-full bg-[#000] h-[35%] opacity-70 absolute bottom-0 items-center justify-center">
              <Text
                className="text-white max-w-[10ch]"
                style={{
                  fontFamily: FONTS.Medium,
                  fontSize: SIZES.Small,
                }}
              >
                {item.quiz}
              </Text>
            </View>
          </AnimatedTouchable>
        )}
        keyExtractor={(item) => item.quiz}
        horizontal
        contentContainerStyle={{ gap: 5 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default QuizList;

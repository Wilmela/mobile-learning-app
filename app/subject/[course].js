import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useRouter, useSearchParams } from "expo-router";
import { Stack } from "expo-router";
import subjects from "../../constants/subjects";
import { FONTS, SIZES } from "../../constants/theme";

const Subject = () => {
  const { height } = useWindowDimensions();
  const { course } = useSearchParams();
  const router = useRouter();

  const filteredTopics = subjects
    .find((sub) => sub.subject === course)
    .topics.map((topic) => topic);

  return (
    <View className="px-4 bg-gray-100 flex-1">
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: `${course}`,
        }}
      />
      <View>
        <FlatList
          data={filteredTopics}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                key={item}
                className="w-full p-1 bg-red-50 rounded-md"
                onPress={() => router.replace(`/lessons/${item}`)}
              >
                <Text
                  // className="text-DARK_GRAY"
                  style={{
                    fontFamily: FONTS.Light,
                    fontSize: SIZES.Large - 6,
                    textAlign: "center",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{
            gap: 10,
            marginTop: height * 0.03,
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <View className="w-full items-center">
                <Text
                  style={{
                    fontFamily: FONTS.Bold,
                    fontSize: SIZES.Large,
                    letterSpacing: 10,
                    color: "rgb(35, 35, 37)",
                    textTransform: "uppercase",
                  }}
                >
                  Topics
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Subject;

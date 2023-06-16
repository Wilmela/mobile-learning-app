import { View, Text, Linking } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../constants/theme";

const Footer = () => {
  return (
    <View className="justify-center flex-row my-4">
      <Text
        style={{
          fontFamily: FONTS.Light,
          fontSize: SIZES.Small -2,
        }}
        onPress={() => Linking.openURL("mailto:chukumelawilson@gmail.com")}
      >
        Made with ❤️ by Techmela services.
      </Text>
    </View>
  );
};

export default Footer;

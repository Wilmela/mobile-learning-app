import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const FONTS = {
  Light: "PoppinsLight",
  Medium: "PoppinsMedium",
  Bold: "PoppinsBold",
};

export const SIZES = {
  Large: 24,
  Normal: 16,
  Small: 14,
};

export const SPACING = {
  width,
  height,

  marginY: width * 0.06,
};

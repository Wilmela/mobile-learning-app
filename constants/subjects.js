import {
  upholstery,
  woodwork,
  woodworkMachines,
  buildingDrawing,
  roofing,
} from "../assets/images";
const email = "nnadikizito@gmail.com";
import { View, Text } from "react-native";

export default [
  {
    subject: "Upholstery & Furniture-making",
    cover: upholstery,
    audioId: 0,
    video: "upholstery+for+beginners",
    readMore: "",
    email,

    topics: [
      "Definition of Upholstery and Furniture Making",
      "Upholstery, Furniture-making Hand tools and their functions",
      "Types of Furniture-making Materials",
      "Summary",
    ],
  },

  // Wood work date
  {
    subject: "Wood Joints",
    cover: woodwork,
    audioId: 1,
    video: "N9Yo-htlGU4",
    readMore: "",
    email,

    topics: [
      "Properties of Materials",
      "Types of Wood Joints",
      "Principles of Frame Construction",
      "Wood Joint Summary",
    ],
  },

  //Woodwork machines
  {
    subject: "Woodwork Machines",
    cover: woodworkMachines,
    audioId: 2,
    video: "zgDMpWNsutQ",
    readMore: "",
    email,

    topics: [
      "Definition of woodwork machines",
      "Types of Woodwork Machines",
      "Safety and Operational Precautions",
      "Woodwork Machines Summary",
    ],
  },

  //Building drawing
  {
    subject: "Building Drawing",
    cover: buildingDrawing,
    audioId: 3,
    video: "zgDMpWNsutQ",
    readMore: "",
    email,
    topics: [
      "Definition of Drawing Symbol",
      "Materials and Equipment used in Drawing",
      "Parts of a Building",
      "Building Drawing Summary",
    ],
  },

  //Roofing
  {
    subject: "Roofing",
    cover: roofing,
    audioId: 4,
    video: "zgDMpWNsutQ",
    readMore: "",
    email,
    topics: [
      "Definition of Roof",
      "Types of Roof",
      "Parts of a Roof",
      "Roofing Summary",
    ],
  },
];

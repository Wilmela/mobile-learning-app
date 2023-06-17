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
  // Upholstery
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
    video:
      "wood+joins+beginner+tutorial&oq=wood+joins++beginner+tutorial&aqs=chrome..69i57.75345j0j4&sourceid=chrome&ie=UTF-8",
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
    video: "woodwork+machines+beginners+tutorial",
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
    video: "Building+drawing+beginners+tutorial",
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
    video: "roofing+beginners+tutorial",
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

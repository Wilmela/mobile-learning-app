import {
  upholstery,
  woodwork,
  woodworkMachines,
  buildingDrawing,
  roofing,
} from "../assets/images";

/**
 * @type {Object[]}
 * @property {number} id Index of the array
 * @property {string} title Audio title
 * @property {string} uri path to audio
 * @property {string} img Image of audio
 */
export default [
  {
    id: 0,
    title: "Upholstery and Furniture Making",
    uri: require("../assets/audio/UAFM.mp3"),
    img: upholstery,
  },
  {
    id: 1,
    title: "Wood Joints",
    uri: require("../assets/audio/WJ.mp3"),
    img: woodwork,
  },
  {
    id: 2,
    title: "Woodwork Machines",
    uri: require("../assets/audio/WWM.mp3"),
    img: woodworkMachines,
  },
  {
    id: 3,
    title: "Building Drawing",
    uri: require("../assets/audio/BLD.mp3"),
    img: buildingDrawing,
  },
  {
    id: 4,
    title: "Roofing",
    uri: require("../assets/audio/RFN.mp3"),
    img: roofing,
  },
];

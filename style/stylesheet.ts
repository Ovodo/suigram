import { Dimensions, Platform, PixelRatio, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

const scale = SCREEN_WIDTH / 375;

const scaleVertical = SCREEN_HEIGHT / 812;

export function actuatedNormalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function actuatedNormalizeVertical(size: number) {
  const newSize = size * scaleVertical;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function isTab() {
  if (SCREEN_WIDTH > 550) {
    return true;
  } else {
    return false;
  }
}

export function isScreenHeight770() {
  if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760) {
    return true;
  } else {
    return false;
  }
}

// export const hexToRgbA = (hex, opacity) => {
//   let c;
//   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//     c = hex.substring(1).split("");
//     if (c.length === 3) {
//       c = [c[0], c[0], c[1], c[1], c[2], c[2]];
//     }
//     c = `0x${c.join("")}`;
//     return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
//       ","
//     )},${opacity})`;
//   }
//   throw new Error("Bad Hex");
// };

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "105%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // bottom: 0,
    top: 0,
    borderRadius: actuatedNormalize(30),
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    letterSpacing: 1.25,
    fontFamily: "Montserrat_700Bold",
    fontSize: actuatedNormalize(35),
  },
  text_md: {
    fontFamily: "SandBold",
    fontSize: actuatedNormalize(16),
  },
  text_md2: {
    fontFamily: "Montserrat_500Medium",
  },
  text_sm: {
    fontFamily: "Montserrat_300Light",
  },
  Pcard: {
    shadowColor: "white",
    shadowOffset: { height: 50, width: 20 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadow: {
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 50 },
    elevation: 5,
    // shadowOpacity: 1,
    shadowRadius: 50,
  },
});

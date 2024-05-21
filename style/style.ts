import { StyleSheet } from "react-native";
import { actuatedNormalize } from "./stylesheet";
export const styles = StyleSheet.create({
  backG: {
    // backgroundColor: "linear-gradient(45deg, red 0 50%, blue 50% 100%)",
    backgroundColor: "black",
  },

  title: {
    fontFamily: "SandBold",
    fontSize: actuatedNormalize(24),
    fontWeight: "600",
  },
  desc: {
    fontFamily: "SandRegs",
    fontSize: actuatedNormalize(14),
    fontWeight: "400",
  },
});

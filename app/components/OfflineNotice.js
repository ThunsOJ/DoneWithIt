import { View, StyleSheet, SafeAreaView } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable == false)
    return (
      <SafeAreaView style={styles.container}>
        <AppText style={styles.text}>No internet connection!</AppText>
      </SafeAreaView>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;

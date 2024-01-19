import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";


function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 5,
    backgroundColor: colors.primary,
    justifyContent: "center",
    height: 70,
    width: 70,
    borderRadius: 35,
    bottom: 25,
  },
});

export default NewListingButton;


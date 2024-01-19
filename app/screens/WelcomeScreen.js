import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const background = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

function WelcomeScreen({navigation}) {
  return (
    <Screen>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
        blurRadius={10}
      >
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
          <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    position: "absolute",
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});


export default WelcomeScreen;

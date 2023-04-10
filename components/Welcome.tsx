import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

const Welcome = () => (
  <View style={styles.container}>
    <CustomText style={styles.welcomeTitle} testID="welcome-title">
      Bienvenido de vuelta!
    </CustomText>
    <CustomText style={styles.nameSubtitle}>Ruben Rodriguez</CustomText>
  </View>
);

const styles = StyleSheet.create({
  welcomeTitle: {
    fontFamily: "Avenir-Black",
    fontSize: 20,
    lineHeight: 27.32,
    color: "#020202",
  },
  nameSubtitle: {
    fontSize: 18,
    color: "#020202",
    fontFamily: "Avenir-Regular",
  },
  container: {
    marginBottom: 20,
  },
});

export default Welcome;

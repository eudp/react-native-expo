import { useMemo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import SectionTitle from "./SectionTitle";
import { ProductsContext } from "../providers/ProductsProvider";
import { getTotalPoints } from "../misc/utils";
import CustomText from "./CustomText";

const Rectangle = () => {
  const products = useContext(ProductsContext);

  const totalPoints = useMemo<number>(
    () => getTotalPoints(products),
    [products]
  );

  return (
    <View>
      <SectionTitle title="Tus Puntos" style={{ textTransform: "uppercase" }} />
      <View style={styles.containerRectangle}>
        <CustomText style={styles.topLeftText}>Diciembre</CustomText>
        <CustomText style={styles.centerText}>{totalPoints} pts</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRectangle: {
    backgroundColor: "#334FFA",
    alignItems: "center",
    justifyContent: "center",
    height: 143,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 20,
    marginLeft: 33,
    marginRight: 33,
    marginBottom: 20,
  },
  topLeftText: {
    position: "absolute",
    top: 21,
    left: 19,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Avenir-Black",
    lineHeight: 22,
  },
  centerText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Avenir-Black",
    lineHeight: 44,
  },
});

export default Rectangle;

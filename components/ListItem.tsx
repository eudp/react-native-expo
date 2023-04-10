import { useMemo } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import "moment/locale/es";
import { COLORS } from "../misc/constants";
import CustomText from "./CustomText";

const ListItem = ({
  image,
  product,
  createdAt,
  is_redemption,
  points,
  onPress,
}) => {
  const formattedDate = useMemo<string | undefined>(
    () => moment(createdAt).locale("es").format("DD [de] MMMM, YYYY"),
    [createdAt]
  );
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <CustomText style={styles.name} testID="product">
          {product}
        </CustomText>
        <CustomText style={styles.date} testID="formattedDate">
          {formattedDate}
        </CustomText>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.pointsContainer}>
          <CustomText
            style={[is_redemption ? styles.red : styles.green, styles.bold]}
            testID="icon"
          >
            {is_redemption ? "-" : "+"}
          </CustomText>
          <CustomText testID="points" style={styles.bold}>
            {points}
          </CustomText>
        </View>
        <View>
          <CustomText>{">"}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 8,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 11,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    lineHeight: 19,
    fontSize: 14,
    fontFamily: "Avenir-Black",
    marginBottom: 7,
  },
  date: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsContainer: {
    fontSize: 16,
    fontFamily: "Avenir-Black",
    marginRight: 17,
    lineHeight: 22,
    flexDirection: "row",
  },
  green: {
    color: COLORS.green,
  },
  red: {
    color: COLORS.red,
  },
  bold: {
    fontFamily: "Avenir-Black",
  },
});

export default ListItem;

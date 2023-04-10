import { StyleSheet, TextStyle } from "react-native";
import CustomText from "./CustomText";

interface Props {
  title: string;
  style?: TextStyle;
}

const SectionTitle = ({ title, style = {} }: Props) => (
  <CustomText style={[styles.sectionTitle, style]}>{title}</CustomText>
);

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#9B9898",
    fontFamily: "Avenir-Black",
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 15,
  },
});

export default SectionTitle;

import React from "react";
import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {}

const CustomText: React.FC<CustomTextProps> = ({
  style,
  children,
  ...restProps
}) => {
  const fontFamily = "Avenir-Regular";

  return (
    <Text style={[{ fontFamily }, style]} {...restProps}>
      {children}
    </Text>
  );
};

export default CustomText;

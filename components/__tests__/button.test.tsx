import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";
import { TouchableOpacity } from "react-native";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button text="Press me!" onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const component = renderer.create(
      <Button text="Press me!" onPress={onPress} />
    );

    const button = component.root.findByType(TouchableOpacity);
    button.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});

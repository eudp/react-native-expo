import React from "react";
import { TouchableOpacity } from "react-native";
import renderer from "react-test-renderer";
import moment from "moment";
import ListItem from "../ListItem";
import { COLORS } from "../../misc/constants";

describe("ListItem", () => {
  const onPressMock = jest.fn();
  const props = {
    image: "https://example.com/image.jpg",
    product: "Test Product",
    createdAt: "2022-04-09T12:34:56.000Z",
    is_redemption: false,
    points: 100,
    onPress: onPressMock,
  };

  it("renders correctly", () => {
    const tree = renderer.create(<ListItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays the correct product name", () => {
    const component = renderer.create(<ListItem {...props} />);
    const nameText = component.root.findByProps({ testID: "product" }).props
      .children;
    expect(nameText).toBe(props.product);
  });

  it("displays the correct formatted date", () => {
    const component = renderer.create(<ListItem {...props} />);
    const formattedDateText = component.root.findByProps({
      testID: "formattedDate",
    }).props.children;
    const formattedDate = moment(props.createdAt)
      .locale("es")
      .format("DD [de] MMMM, YYYY");
    expect(formattedDateText).toBe(formattedDate);
  });

  it("displays the correct points and icon color", () => {
    const component = renderer.create(<ListItem {...props} />);
    const pointsText = component.root.findByProps({ testID: "points" }).props
      .children;
    const {
      children: icon,
      style: [{ color: iconColor }],
    } = component.root.findByProps({ testID: "icon" }).props;

    let expectedPointsText = props.points;
    let expectedIcon = "+";
    let expectedIconColor = COLORS.green;

    if (props.is_redemption) {
      expectedPointsText = props.points;
      expectedIcon = "-";
      expectedIconColor = COLORS.red;
    }
    expect(pointsText).toBe(expectedPointsText);
    expect(iconColor).toBe(expectedIconColor);
    expect(icon).toBe(expectedIcon);
  });

  it("calls onPress when pressed", () => {
    const component = renderer.create(<ListItem {...props} />);
    const listItem = component.root.findByType(TouchableOpacity);
    listItem.props.onPress();
    expect(onPressMock).toHaveBeenCalled();
  });
});

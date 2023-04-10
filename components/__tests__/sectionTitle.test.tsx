import React from "react";
import renderer from "react-test-renderer";
import SectionTitle from "../SectionTitle";

describe("SectionTitle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SectionTitle title="Test Title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

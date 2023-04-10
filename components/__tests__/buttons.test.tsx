import React from "react";
import renderer from "react-test-renderer";
import Buttons from "../Buttons";
import Button from "../Button";
import { FILTERS } from "../../misc/constants";

describe("Buttons", () => {
  const handleFilter = jest.fn();

  it("renders correctly when filter is all", () => {
    const tree = renderer
      .create(<Buttons handleFilter={handleFilter} filter={FILTERS.ALL} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when filter is not all", () => {
    const tree = renderer
      .create(
        <Buttons handleFilter={handleFilter} filter={FILTERS.NO_REEDEMED} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls handleFilter with correct filter when 'Ganados' button is pressed", () => {
    const component = renderer.create(
      <Buttons handleFilter={handleFilter} filter={FILTERS.ALL} />
    );

    const buttons = component.root.findAllByType(Button);
    buttons[0].props.onPress();
    expect(handleFilter).toHaveBeenCalledWith(FILTERS.NO_REEDEMED);
  });

  it("calls handleFilter with correct filter when 'Canjeados' button is pressed", () => {
    const component = renderer.create(
      <Buttons handleFilter={handleFilter} filter={FILTERS.ALL} />
    );

    const buttons = component.root.findAllByType(Button);
    buttons[1].props.onPress();
    expect(handleFilter).toHaveBeenCalledWith(FILTERS.REEDEMED);
  });

  it("calls handleFilter with correct filter when 'Todos' button is pressed", () => {
    const component = renderer.create(
      <Buttons handleFilter={handleFilter} filter={FILTERS.NO_REEDEMED} />
    );

    const buttons = component.root.findAllByType(Button);
    buttons[0].props.onPress();
    expect(handleFilter).toHaveBeenCalledWith(FILTERS.ALL);
  });
});

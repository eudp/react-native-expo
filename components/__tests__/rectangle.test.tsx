import React from "react";
import renderer from "react-test-renderer";
import { ProductsContext } from "../../providers/ProductsProvider";
import Rectangle from "../Rectangle";

describe("Rectangle", () => {
  it("renders correctly", () => {
    const products = [
      {
        image: "https://example.com/image.jpg",
        product: "Test Product",
        createdAt: "2022-04-09T12:34:56.000Z",
        is_redemption: false,
        points: 100,
        id: "1",
      },
      {
        image: "https://example.com/image.jpg",
        product: "Test Product",
        createdAt: "2022-04-09T12:34:56.000Z",
        is_redemption: true,
        points: 200,
        id: "3",
      },
    ];

    const tree = renderer
      .create(
        <ProductsContext.Provider value={products}>
          <Rectangle />
        </ProductsContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { getTotalPoints } from "../../misc/utils";
import { ProductType } from "../../misc/types";

describe("getTotalPoints", () => {
  it("should return 0 if no products are passed", () => {
    const products: ProductType[] = [];
    const totalPoints = getTotalPoints(products);
    expect(totalPoints).toEqual(0);
  });

  it("should correctly calculate total points for non-redemption products", () => {
    const products: ProductType[] = [
      {
        points: 10,
        is_redemption: false,
      },
      {
        points: 20,
        is_redemption: false,
      },
      {
        points: 30,
        is_redemption: false,
      },
    ];
    const totalPoints = getTotalPoints(products);
    expect(totalPoints).toEqual(60);
  });

  it("should correctly calculate total points for redemption products", () => {
    const products: ProductType[] = [
      {
        points: 10,
        is_redemption: true,
      },
      {
        points: 20,
        is_redemption: true,
      },
      {
        points: 30,
        is_redemption: true,
      },
    ];
    const totalPoints = getTotalPoints(products);
    expect(totalPoints).toEqual(-60);
  });

  it("should correctly calculate total points for a mix of redemption and non-redemption products", () => {
    const products: ProductType[] = [
      {
        points: 10,
        is_redemption: true,
      },
      {
        points: 20,
        is_redemption: false,
      },
      {
        points: 30,
        is_redemption: true,
      },
    ];
    const totalPoints = getTotalPoints(products);
    expect(totalPoints).toEqual(-20);
  });
});

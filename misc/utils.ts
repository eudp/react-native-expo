import { ProductType } from "./types";

export const getTotalPoints = (products: ProductType[]) =>
  products.reduce((acc, product) => {
    if (product.is_redemption) {
      return acc - product.points;
    }
    return acc + product.points;
  }, 0);

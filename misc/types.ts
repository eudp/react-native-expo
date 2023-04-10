export type FilterType = "all" | "reedemed" | "noReedemed";

export type ProductType = {
  createdAt?: string;
  product?: string;
  points?: number;
  image?: string;
  is_redemption?: boolean;
  id?: string;
};

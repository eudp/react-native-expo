import { createContext, useState, useEffect, ReactNode } from "react";
import { ActivityIndicator } from "react-native";
import { ProductType } from "../misc/types";
import { API_URL } from "../misc/constants";
import CustomText from "../components/CustomText";

const ProductsContext = createContext<ProductType[]>([]);

export const getProducts = async (): Promise<ProductType[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

type Props = {
  children: ReactNode;
};

const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (error) {
    return <CustomText>{error.message}</CustomText>;
  }

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };

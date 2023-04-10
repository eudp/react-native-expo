import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { ProductsProvider } from "../providers/ProductsProvider";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "Avenir-Black": require("../assets/fonts/Avenir-Black.ttf"),
    "Avenir-Regular": require("../assets/fonts/Avenir-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ProductsProvider>
      <Slot />
    </ProductsProvider>
  );
};

export default Layout;

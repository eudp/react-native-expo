import { useContext, useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter, usePathname } from "expo-router";
import moment from "moment";
import "moment/locale/es";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";
import { ProductsContext } from "../../providers/ProductsProvider";
import { ProductType } from "../../misc/types";
import CustomText from "../../components/CustomText";

const extractIdFromPathname = (pathname: string): string => {
  return pathname.split("/")[2];
};

const Product = () => {
  const router = useRouter();
  const pathname = usePathname();

  const id = extractIdFromPathname(pathname);

  const products = useContext(ProductsContext);

  const item = useMemo<ProductType | undefined>(
    () => products.find((product) => product.id === id),
    [id, products]
  );

  const formattedDate = useMemo<string | undefined>(
    () => moment(item.createdAt).locale("es").format("DD [de] MMMM, YYYY"),
    [item.createdAt]
  );

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6F36A2" />
      <SafeAreaView style={styles.header}>
        <CustomText style={styles.title}>{item.product}</CustomText>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </View>

        <View>
          <SectionTitle title="Detalles del producto:" />
          <CustomText style={styles.description}>
            Comprado el {formattedDate ?? ""}
          </CustomText>
          <SectionTitle title="Con esta compra acumulaste:" />
          <CustomText style={styles.accumText}>{item.points} puntos</CustomText>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Aceptar" onPress={goBack} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    backgroundColor: "#CFD6FF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    color: "#000",
    paddingVertical: 24,
    fontFamily: "Avenir-Black",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.02,
    marginLeft: 20,
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 32,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: 19,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 350,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  description: {
    fontFamily: "Avenir-Black",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  accumText: {
    fontFamily: "Avenir-Black",
    fontSize: 24,
    lineHeight: 33,
    marginTop: 17,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Product;

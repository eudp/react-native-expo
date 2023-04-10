import { useContext, useMemo, useCallback } from "react";
import { StyleSheet, View, VirtualizedList } from "react-native";
import ListItem from "./ListItem";
import SectionTitle from "./SectionTitle";
import { useRouter } from "expo-router";
import { ProductsContext } from "../providers/ProductsProvider";
import { ProductType, FilterType } from "../misc/types";
import { FILTERS } from "../misc/constants";

interface Props {
  filter: FilterType;
}

const ITEM_HEIGHT = 55;

const List = ({ filter }: Props): JSX.Element => {
  const router = useRouter();
  const products = useContext<ProductType[]>(ProductsContext);

  const reedemedProducts = useMemo<ProductType[]>(
    () => products.filter((product) => product.is_redemption),
    [products]
  );

  const noReedemedProducts = useMemo<ProductType[]>(
    () => products.filter((product) => !product.is_redemption),
    [products]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <ListItem
        {...item}
        onPress={() => {
          router.push(`/product/${item.id}`);
        }}
      />
    ),
    [router]
  );

  const getItemLayout = useCallback(
    (data: ProductType[] | null | undefined, index: number) => ({
      length: data.length,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const keyExtractor = useCallback((item: ProductType) => item.id, []);

  const getItem = useCallback(
    (data: ProductType[] | null | undefined, index: number) => data[index],
    []
  );

  const getItemCount = useCallback(
    (data: ProductType[] | null | undefined) => data.length,
    []
  );

  return (
    <View style={styles.container}>
      <SectionTitle
        title="Tus Movimientos"
        style={{ textTransform: "uppercase" }}
      />
      <VirtualizedList
        getItem={getItem}
        getItemCount={getItemCount}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        data={
          filter === FILTERS.ALL
            ? products
            : filter === FILTERS.REEDEMED
            ? reedemedProducts
            : noReedemedProducts
        }
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
        getItemLayout={getItemLayout}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  list: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 23,
  },
});

export default List;

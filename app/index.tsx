import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Rectangle from "../components/Rectangle";
import List from "../components/List";
import Button from "../components/Buttons";
import Welcome from "../components/Welcome";
import { FilterType } from "../misc/types";
import { FILTERS } from "../misc/constants";

const Index = () => {
  const [filter, setFilter] = useState<FilterType>(FILTERS.ALL);

  const handleFilter = (filter: FilterType) => {
    setFilter(filter);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerSafeAreaView}>
        <Welcome />
        <Rectangle />
        <List filter={filter} />
        <Button handleFilter={handleFilter} filter={filter} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  containerSafeAreaView: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
});

export default Index;

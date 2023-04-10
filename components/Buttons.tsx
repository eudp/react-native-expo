import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { FilterType } from "../misc/types";
import { FILTERS } from "../misc/constants";

interface Props {
  handleFilter: (filter: string) => void;
  filter: FilterType;
}

const Buttons = ({ handleFilter, filter }: Props) => (
  <View style={styles.buttonContainer}>
    {filter === FILTERS.ALL ? (
      <>
        <Button
          text="Ganados"
          onPress={() => {
            handleFilter(FILTERS.NO_REEDEMED);
          }}
          styleButton={{ marginRight: 13 }}
        />
        <Button
          text="Canjeados"
          onPress={() => {
            handleFilter(FILTERS.REEDEMED);
          }}
        />
      </>
    ) : (
      <Button
        text="Todos"
        onPress={() => {
          handleFilter(FILTERS.ALL);
        }}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Buttons;

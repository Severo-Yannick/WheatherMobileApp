import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = ({ dt, min, max }) => {
  const { item, temp, date } = styles;
  return (
    <View style={item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={date}>{dt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});

export default ListItem;
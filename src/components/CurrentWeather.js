import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>36°</Text>
        <Text style={styles.feels}>Feels like 38°</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 40°</Text>
          <Text style={styles.highLow}>Low: 22°</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    color: "black",
    fontSize: 48,
  },
  message: {
    color: "black",
    fontSize: 30,
  },
});

export default CurrentWeather;

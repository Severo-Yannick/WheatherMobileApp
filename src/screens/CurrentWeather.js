import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>36°</Text>
        <Text style={styles.feels}>Feels like 38°</Text>
        <RowText
          messageOne={"High: 40°"}
          messageTwo={"Low: 22°"}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
          messageOne={"Its sunny"}
          messageTwo={"Its perfect t-shirt weather"}
          containerStyles={styles.bodyWrapper}
          messageOneStyles={styles.description}
          messageTwoStyles={styles.message}
        />
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
    justifyContent: "center",
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

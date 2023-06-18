import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = () => {
  const {
    container,
    image,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../assets/city.jpg")} style={image}>
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={populationWrapper}>
          <Feather name={"user"} size={50} color={"red"} />
          <Text style={populationText}>8000</Text>
        </View>
        <View style={riseSetWrapper}>
          <Feather name={"sunrise"} size={50} color={"white"} />
          <Text style={riseSetText}>6:18:25am</Text>
          <Feather name={"sunset"} size={50} color={"white"} />
          <Text style={riseSetText}>18:28:45pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;

import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WHEATER_API_KEY } from "@env";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  const fectchWeatherData = async (lon, lat) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WHEATER_API_KEY}`
      );
      const jsonData = await response.json();
      setWeather(jsonData);
    } catch (error) {
      console.error("Could not fetch weather: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { coords } = location;
      const { latitude, longitude } = coords || {};
      setLatitude(latitude);
      setLongitude(longitude);
      fectchWeatherData();
    })();
  }, [latitude, longitude]);

  if (weather) {
    console.log('weather-------', weather);
  }

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) : (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;

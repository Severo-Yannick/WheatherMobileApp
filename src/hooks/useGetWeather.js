import { useState, useEffect } from "react";
import { WHEATER_API_KEY } from "@env";
import * as Location from "expo-location";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  const fectchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WHEATER_API_KEY}&units=metric`
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
      await fectchWeatherData();
    })();
  }, [latitude, longitude]);
  return [loading, error, weather];
};

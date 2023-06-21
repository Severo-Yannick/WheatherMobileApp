import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
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

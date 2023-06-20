import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = ({ iconName, iconeColor, bodyText, bodyTextStyles }) => {
  const { textTheme, container } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconeColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;

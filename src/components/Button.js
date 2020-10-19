import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
// import Icon from "react-native-vector-icons/FontAwesome5";


export default function Button({ title, onPress }) {
  return (
    <View style={GlobalStyles.buttonWrapper}>
      <TouchableOpacity style={GlobalStyles.button} onPress={onPress}>
        <Text style={GlobalStyles.buttonText}>{title}</Text>
        {/* <Icon size={20} name={"arrow-right"} /> */}
      </TouchableOpacity>
    </View>
  );
}

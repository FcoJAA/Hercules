import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        App created by FcoAA. App created with React-Native, Expo Cli in
        javascript programming language.Free of copyright.
      </Text>
      <Text style={styles.text}>08/11/2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    fontSize: 13,
    color: "white",
  },
});

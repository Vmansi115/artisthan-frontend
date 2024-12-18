import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "@/components/Themed";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search page</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

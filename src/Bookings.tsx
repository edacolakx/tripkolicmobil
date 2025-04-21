import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const Bookings = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Bookings</Text>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

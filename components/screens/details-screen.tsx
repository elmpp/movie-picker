import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Link, linker} from '../../lib/navigation/linking'

export const DetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>THIS IS THE DETAILS SCREEN</Text>
      <Link routeName="home">jump to home screen via component</Link>
      <Text onPress={() => linker.navigate({routeName: 'home'})}>jump to home screen imperatively</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
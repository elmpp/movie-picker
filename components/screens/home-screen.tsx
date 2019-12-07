import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import {Linking} from 'expo'
import {Link, linker} from '../../navigation/linking'

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>THIS IS THE HOME SCREEN</Text>
      <Link toRoute="details">jump to details screen via component</Link>
      <Text onPress={() => linker.navigate('details')}>jump to details screen imperatively</Text>
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
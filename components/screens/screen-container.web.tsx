import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Surface} from 'react-native-paper'

interface ScreenContainerProps {}
export const ScreenContainer: React.FC<ScreenContainerProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
          {children}
      </Surface>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  surface: {
    flex: 1,
  },
  surfaceContainer: {
    backgroundColor: 'green',
    flex: 1,
  },
})
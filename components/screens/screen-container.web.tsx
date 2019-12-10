import React from 'react'
import {StyleSheet, View} from 'react-native'
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
    width: 1200,
    paddingHorizontal: 5,
    marginHorizontal: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  surface: {
    flex: 1,
  },
})
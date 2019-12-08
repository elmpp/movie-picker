/**
 * On native we'll be currently within a "card" container (and already with a SafeArea enabled)
 * Please see 'app-container#cardStyle' for "layout" styles
 *
 *  - RN docs SafeAreaView - https://tinyurl.com/tumwrmk
 */

import React from 'react'
import {StyleSheet, View} from 'react-native'
import {withTheme} from 'react-native-paper'

export const ScreenContainer = withTheme(({children, theme}) => {
  return (
    <View style={[styles.container]}>
      {children}
    </View>
  )
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    // paddingHorizontal: 5,
    // marginHorizontal: 5,
  },
})
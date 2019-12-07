/**
 * Native entrypoint component.
 */
import React from 'react'
import {withRoot} from './hoc/with-root'
import {DarkTheme} from 'react-native-paper'
import { View, Text } from 'react-native'

export default withRoot({reactNativePaperProps: {theme: DarkTheme, mode: 'adaptive'}})

// export default () => (
//   <View style={{flex: 1, backgroundColor: 'red'}}>
//   <Text>Bollocks</Text>
//   </View>
// )

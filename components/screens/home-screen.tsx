/**
 *  - react-native-paper cards -
 */

import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Link, linker } from "../../navigation/linking";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  withTheme,
  Theme
} from "react-native-paper";

const ThemedTitle = withTheme(
  ({ theme, ...props }: any) => {
    const defaultProps = {
      style: styles.titleContainer,
      titleStyle: {
        ...theme.fonts.light,
        fontSize: 14,
        color: theme.colors.surface
      },
      subtitleStyle: {
        ...theme.fonts.regular,
        lineHeight: 24,
        fontSize: 22,
        color: theme.colors.surface
      }
    };
    return <Card.Title {...defaultProps} {...props} />;
  }
);

const Carousel: React.FC<{style?: ViewStyle}> = ({style}) => {
  return <Card elevation={9} style={[{width: '100%'}, style]}>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <ThemedTitle
      title="Card Title"
      subtitle="Card Subtitle"
    />
  </Card>
}

export const HomeScreen = withTheme(({ theme }) => {
  return (
    <>
      <View style={styles.heroContainer}>
        <Carousel />
      </View>
      <View style={styles.heroContainer}>
        <Carousel style={{width: '33%'}} />
        <Carousel style={{width: '33%'}} />
        <Carousel style={{width: '33%'}} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  heroContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  titleContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 10,
    zIndex: 3,
    left: 0,
    right: 0
  },
});

// export const HomeScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text>THIS IS THE HOME SCREEN</Text>
//       <Link routeName="details">jump to details screen via component</Link>
//       <Text onPress={() => linker.navigate({routeName: 'details'})}>jump to details screen imperatively</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

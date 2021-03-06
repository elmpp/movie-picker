import React from "react";
import { ViewStyle, View, StyleSheet } from "react-native";
import { styleVars } from "../../style";
import { useResponsiveVal } from "../../lib/hooks/use-responsive-val";

interface BoxProps {
  style?: ViewStyle;
}
export const Box: React.FC<BoxProps> = ({ style, children }) => {
  const marginBottom = useResponsiveVal("gutter")
  return (
    <View
      style={[
        styles.heroContainer,
        { marginBottom }
      , style]}
    >{children}</View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    height: styleVars.carouselHeight
  }
});

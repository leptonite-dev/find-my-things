import React, { FC, ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface Props {
  icon: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const IconButton: FC<Props> = ({ icon, style }) => {
  return <View style={style}> {icon}</View>;
};

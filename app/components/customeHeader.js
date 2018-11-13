import React from "react";
import { View, Platform } from "react-native";

const customeHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >      
    </View>
  );
};

export default customeHeader;
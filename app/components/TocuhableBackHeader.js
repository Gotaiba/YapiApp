import React, { Component } from "react";
import { 
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import IconFa from "react-native-vector-icons/FontAwesome";

const TouchableBackHeader=(props)=>{   
        // const { title, style } = this.props;
        // const { header, text } = defaultStyle;
        // const combineStyles = StyleSheet.flatten([header, style]); 
        return (
            <View>
                <IconFa              
              name="angle-left"
              color="#007aff"
              style={{position:'absolute',top:-5,left:2}}
              size={30}
            />    
            <TouchableOpacity {...props}>        
                <Text style={defaultStyle.text}> {props.title}</Text>
            </TouchableOpacity>
            </View>
        );
}
export default TouchableBackHeader;

const defaultStyle = StyleSheet.create({
    text:{
        fontSize: 18,
        color:"#007aff"
    }
});
import React, { Component } from "react";
import { 
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import IconFa from "react-native-vector-icons/FontAwesome";

const TouchableHeaderBtn=(props)=>{   
        // const { title, style } = this.props;
        // const { header, text } = defaultStyle;
        // const combineStyles = StyleSheet.flatten([header, style]); 
        return (
            <TouchableOpacity {...props}>
           
                <Text style={defaultStyle.text}> {props.title}</Text>
            </TouchableOpacity>
        );
}
export default TouchableHeaderBtn;

const defaultStyle = StyleSheet.create({
    text:{
        fontSize: 18,
        color:"#007aff"
    }
});
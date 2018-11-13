import React, { StyleSheet,Dimensions } from 'react-native'
const {width:WIDTH}=Dimensions.get('window')
 
export default StyleSheet.create({   
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent:'center'

    },
    containerTop:{
        flex:1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent:'flex-start'
    },
    welcomeText:{
        fontSize: 34,
        color:"#6b6b6b"
    },
    headerText:{
        fontSize:20,
        color:'rgba(83, 172, 211,0.7)',
        marginLeft: -30,
    },
    headerTextCenter:{
        fontSize:20,
        color:'rgba(83, 172, 211,0.7)',
    },
    LogoSection:{
        marginVertical: 10,
    },
    Logo:{
        width:120,
        height:120,
        borderRadius: 120/2,
        backgroundColor:"#53acd3",   
        borderWidth: 2,
        borderColor: "#ddd",  
    },
    loginForm:{
        marginVertical: 20,
    },
    inputIcon:{
        position:'absolute',
        top:15,
        color:'rgba(83, 172, 211,0.7)'
    },
    normalInput:{
        borderBottomWidth: 2,
        borderBottomColor: "rgba(83, 172, 211,0.6)",
        color:"#333",
        width:WIDTH-100,
        height:35,
        marginVertical: 10,
        paddingLeft: 25,
    },
    verificationInput:{
        borderWidth:1,
        borderColor:"rgba(83, 172, 211,1)",       
        width:WIDTH-130,
        height:55,
        textAlign:"center",
        marginVertical: 10,
    },
    buttonVoidContainer:{
        width:WIDTH-100,
        height:50,
        paddingTop: 13,
        borderRadius: 35,    
        marginVertical: 10,
        backgroundColor:"transparent",
        borderWidth:1,
        borderColor: "rgba(83, 172, 211,1)",
    },
    buttonVoidText:{
        color:"rgba(83, 172, 211,1)",
        fontSize:14,
        textAlign:'center'
    },
    forgetContainer:{
        marginVertical: 10,        
    },
    forgetText:{
        color:"rgba(83, 172, 211,1)",
        fontSize:14,
        textAlign:'center'
    },
    accountContainer:{
        marginVertical: 10,        
    },
    accountText:{
        color:"rgba(83, 172, 211,1)",
        fontSize:16,
        textAlign:'center',        
        textDecorationLine: 'underline'
    },
    buttonFillContainer:{
        width:WIDTH-100,
        height:40,
        paddingVertical: 10,
        borderRadius: 25,    
        marginVertical: 10,
        backgroundColor:"rgba(83, 172, 211,1)",          
    },
    buttonFillText:{
        color:"#fff",
        fontSize:16,
        textAlign:'center'
    },
    verificationHeaderText:{
        fontSize:16,        
        textAlign:"center",
        
    }
 })
    
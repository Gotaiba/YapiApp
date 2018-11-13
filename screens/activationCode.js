import React, { Component } from "react";
import {TouchableOpacity, Text,Alert,Button, View,TextInput,Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TouchableBackHeader from '../app/components/TocuhableBackHeader';
import Icon from "react-native-vector-icons/Ionicons";
import IconFa from "react-native-vector-icons/FontAwesome";
import styles from '../app/components/styles';


class ActivationCode extends Component {
    static  navigationOptions= ({ navigation, screenProps,SaveAccountInfo }) => ({                
        headerTitle: "Verify Number",   
        headerLeft: (
                        <TouchableBackHeader
                         style={{marginLeft: 12}} title="Back"
                          onPress={()=>navigation.navigate('Registration')}>                
                          </TouchableBackHeader>)
      });
      constructor(props) {
        super(props);
        this.state = {
          code: '',          
        };
      }
      GetVerificationCode=(VerCode)=>{
          var codeLength=VerCode.length;
          this.setState({code:VerCode});
          console.log("Code Length: "+codeLength);
          if(codeLength==4){
              this.props.navigation.navigate('Login')
          }
      }
    render() {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.containerTop}
                keyboardShouldPersistTaps="handled"
            >               
                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                        <Text style={styles.verificationHeaderText}>A verification code has been sent to the phone number you provided</Text>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={[styles.headerTextCenter, { fontWeight: 'bold' }]}>+249 9 12303021</Text>
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={styles.headerTextCenter}>Verification Code</Text>
                    </View>
                    <View>
                        <TextInput style={styles.verificationInput}
                            underlineColorAndroid='transparent'
                            keyboardType="numeric"
                            onChangeText={VerCode=>this.GetVerificationCode(VerCode)}
                        />
                    </View> 
                    <View style={{width:210}}>
                        <Text style={{color:"#ccc", fontSize:14,textAlign:"center"}}>Please enter verification code to continue</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonVoidContainer} onPress={this.SaveAccountInfo}>
                            <Text style={styles.buttonVoidText}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>           
            </KeyboardAwareScrollView>
        );
    }
}
export default ActivationCode;

import React,{Component} from 'react';
import {
     Text,
      View,
      TextInput,
      KeyboardAvoidingView,
      TouchableOpacity,
 } from 'react-native';
 import Icon from "react-native-vector-icons/Ionicons";
 import styles from '../app/components/styles'

class LoginScreen extends Component {
    static navigationOptions ={
        header:null
      }
      render() {
        return (        
        <KeyboardAvoidingView behavior="padding" keyboardShouldPersistTaps='handled' style={styles.container}>                                       
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <View style={styles.LogoSection}>
                        <View style={styles.Logo}></View>
                    </View>
                    <View style={styles.loginForm}>
                        <View>
                            <Icon
                                style={styles.inputIcon}
                                name="ios-call"
                                color="#ccc"
                                size={25}
                            />
                            <TextInput style={styles.normalInput}
                            underlineColorAndroid='transparent'
                            placeholder="Phone Number"
                            returnKeyType="next"
                            onSubmitEditing={()=>this.passwordInput.focus()}
                            keyboardType="numeric"
                            placeholderTextColor="#a1a1a1"
                            />
                        </View>
                        <View>
                             <Icon
                                style={styles.inputIcon}
                                name="ios-lock"
                                color="#ccc"
                                size={25}
                            />
                            <TextInput style={styles.normalInput}
                            underlineColorAndroid='transparent'
                            placeholder="Password"
                            secureTextEntry
                            returnKeyType="go"
                            ref={(input)=>this.passwordInput=input}
                            placeholderTextColor="#a1a1a1"
                            />
                        </View>
                        <TouchableOpacity style={styles.forgetContainer}>
                            <Text style={styles.forgetText}>Forget Password ?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonFillContainer}>
                            <Text style={styles.buttonFillText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.accountContainer} onPress={()=>this.props.navigation.navigate('ActivationCode')}>
                            <Text style={styles.accountText}>Create an Account</Text>
                        </TouchableOpacity>
                    </View>                                  
          </KeyboardAvoidingView>        
        );
      }
    }
    export default LoginScreen;
    

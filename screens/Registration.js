import React,{Component} from 'react';
import {TouchableOpacity, Text,Alert,Button, View,TextInput,Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TouchableHeaderBtn from '../app/components/TouchableHeaderBtn';
import Icon from "react-native-vector-icons/Ionicons";
import IconFa from "react-native-vector-icons/FontAwesome";
import styles from '../app/components/styles';
import {AddUsers} from '../config'


const {width:WIDTH}=Dimensions.get('window')
class RegistrationScreen extends Component {
  static  navigationOptions= ({ navigation, screenProps,SaveAccountInfo }) => ({                
    headerTitle: "New Account",
    headerLeft: (<TouchableHeaderBtn style={{marginLeft: 10}} title="Cancel" onPress={()=>navigation.navigate('Login')}></TouchableHeaderBtn>)
  });
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName:'',
      phone:'',
      password:''
    };
  }
  SaveAccountInfo=()=>{
    var userinfo={
      FirstName:this.state.firstName,
      LastName:this.state.lastName,
      PhoneNumber:this.state.phone,
      Password:this.state.password,
      ConfirmPassword:this.state.password
    };
   AddUsers(userinfo,function(res){
      console.log("res: ",res);
      if(res===true)
      {
        console.log("Perfect");
      }
    })
  }
  render() {
    return (
      <KeyboardAwareScrollView      
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.containerTop}  
      keyboardShouldPersistTaps="handled"  
    >
        <View style={{marginTop:30}}>
          <Text style={styles.headerText}>Account Holder</Text>
          <View>   
          <IconFa
              style={styles.inputIcon}
              name="id-card-o"
              color="#ccc"
              size={20}
            />        
            <TextInput style={styles.normalInput}
              underlineColorAndroid='transparent'
              placeholder="First Name"
              returnKeyType="next"
              onSubmitEditing={() => this.lastNameInput.focus()} 
              onChangeText={(firstName)=>this.setState({firstName})}             
              placeholderTextColor="#a1a1a1"
            />            
          </View>
          <View>   
            <IconFa
              style={styles.inputIcon}
              name="id-card-o"
              color="#ccc"
              size={20}
            />           
            <TextInput style={styles.normalInput}
              underlineColorAndroid='transparent'
              placeholder="Last Name"
              returnKeyType="next"
              ref={(input)=>this.lastNameInput=input}
              onSubmitEditing={() => this.phoneInput.focus()}    
              onChangeText={(lastName)=>this.setState({lastName})}      
              placeholderTextColor="#a1a1a1"
            />
          </View>
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
              ref={(input)=>this.phoneInput=input}
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={(phone)=>this.setState({phone})}   
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
              ref={(input) => this.passwordInput = input}
              onChangeText={(password)=>this.setState({password})}   
              placeholderTextColor="#a1a1a1"
            />
          </View>
            <TouchableOpacity style={styles.buttonFillContainer} onPress={this.SaveAccountInfo}>
                <Text style={styles.buttonFillText}>Save</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
export default RegistrationScreen;

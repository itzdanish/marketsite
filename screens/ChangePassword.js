import React, { useEffect,useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback,Keyboard,TextInput,Alert,ScrollView } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import db from '../config';
import cache from '../cache';
import { SafeAreaView } from "react-native-safe-area-context";



const Serviceproviderreg = ({navigation}) => {
 
  const [oldPasswordValid,setOldPasswordIsValid] = useState(false);
  const [oldPasswordValidationMsg, setOldPasswordValidationMsg] = useState("");
  const [newPasswordValid,setNewPasswordIsValid] = useState(false);
  const [newPasswordValidationMsg, setNewPasswordValidationMsg] = useState("");
  const [confirmPasswordValid,setConfirmPasswordIsValid] = useState(false);
  const [confirmPasswordValidationMsg, setConfirmPasswordValidationMsg] = useState("");

  const checkPassword = (str) =>
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str)
}
  
  const [oldPassword,setOldPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");


  const isOldPasswordValid = () =>{
    
    var user = firebase.auth().currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(
      firebase.auth().currentUser.email,
      oldPassword
    );
            
    user.reauthenticateWithCredential(credential).then(function() {
      setOldPasswordIsValid(true)
    }).catch(function(error) {
      // An error happened.
    });
        
    }

  const isNewPasswordValid = text =>{
    if(!checkPassword(text)) return false
    else return true
  }

  const isConfirmPasswordValid = text =>{
    if(confirmPassword!=newPassword ) return false
    else return true
  }


  const reg = async() =>{
    if(!oldPasswordValid || !newPasswordValid || !confirmPasswordValid ){
      if(!isOldPasswordValid(oldPassword)){
        setOldPasswordIsValid(false)
        setOldPasswordValidationMsg("Old password is incorrect")
    }
      else {
        setOldPasswordValidationMsg("")
        setOldPasswordIsValid(true)
        
      }
      if(!isNewPasswordValid(newPassword)){
        setNewPasswordIsValid(false);
        setNewPasswordValidationMsg("Check new password")
    }
      else {
        setNewPasswordValidationMsg("")
        setNewPasswordIsValid(true)
        
      }
      if(!isConfirmPasswordValid(confirmPassword)){
        setConfirmPasswordIsValid(false);
        setConfirmPasswordValidationMsg("Confirm Password doesn't match")
    }
      else {
        setConfirmPasswordValidationMsg("")
        setConfirmPasswordIsValid(true)
        
      }
    
     

    }else{
      try {
        var user = firebase.auth().currentUser; 
        user.updatePassword(newPassword).then(function() {
          Alert.alert("Password Changed")
          navigation.push('ChangePassword')
        }).catch(function(error) {
          var errorMessage = error.message
          Alert.alert(errorMessage)
        }); 

      } catch (error) {
        var errorMessage = error.message
        Alert.alert(errorMessage)
      }

    }
  }



  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
     
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.nameinput} placeholder=" Enter old Password"
          numberOfLines={1}
          onChangeText={text => setOldPassword(text)}>
        </TextInput>
        {!oldPasswordValid && <Text style={{marginLeft:25,color:'red'}}>{oldPasswordValidationMsg}</Text>}
      <TextInput style={styles.phoneinput} placeholder=" Enter new Password"
          numberOfLines={1}
          onChangeText={text => setNewPassword(text)}
          keyboardType='numeric'>
        </TextInput>
        {!newPasswordValid && <Text style={{marginLeft:25,color:'red'}}>{newPasswordValidationMsg}</Text>}
      <TextInput style={styles.cityinput} placeholder=" Enter Confirm Password"
          numberOfLines={1}
          onChangeText={text => setConfirmPassword(text)}>
      </TextInput>
      {!confirmPasswordValid && <Text style={{marginLeft:25,color:'red'}}>{confirmPasswordValidationMsg}</Text>}
      <MaterialButtonLight disable={false} style={styles.materialButtonLight} click={reg}>
    <Text style={styles.caption}>Change</Text></MaterialButtonLight>    
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  almostDone: {
    color: "#121212",
    height: 39,
    width: 262,
    fontSize: 36,
    marginTop: 25,
    marginLeft: 26,
    fontWeight: "bold",
  },
  topline: {
    color: "#121212",
    height: 29,
    width: 271,
    fontSize: 21,
    marginTop: 13,
    marginLeft: 27
  },
  name: {
          color: "#121212",
    height: 27,
    width: 55,
    fontSize: 18,
    marginTop: 38,
    marginLeft: 27
  },
  phone: {
    color: "#121212",
    height: 19,
    width: 100,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 28
    
  },
  city: {
    color: "#121212",
    height: 27,
    width: 150,
    fontSize: 18,
    marginTop: 15,
    marginLeft: 28
  },
  nameinput: {
    width: 322,
    height: 53,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 27
  },
  enterName: {
    color: "#121212",
    height: 28,
    width: 126,
    opacity: 0.47,
    fontSize: 18,
    marginLeft: 21,
    marginTop: 13
  },
  phoneinput: {
    width: 322,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 27
  },
  enterName3: {
    color: "#121212",
    height: 28,
    width: 126,
    opacity: 0.44,
    fontSize: 18,
    marginTop: 11,
    marginLeft: 17
  },
  cityinput: {
    width: 322,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: 28
  },
  select2: {
    color: "#121212",
    height: 28,
    width: 79,
    opacity: 0.5,
    fontSize: 18,
    marginTop: 11,
    marginLeft: 16
  },
  acceptancetriangle: {
    top: -40,
    left: 0,
    width: 390,
    height: 70,
    backgroundColor: "rgba(255,255,255,1)"
  },
  termscondition: {
    top: 10,
    left: 54,
    position: "relative",
    color: "#121212",
    height: 60,
    width: 330,
    fontSize: 18,
    marginTop:5,
    textAlign: "left"
  },
  accounttype: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    height: 50,
    width: 322,
    backgroundColor: "rgba(255,251,251,1)",
    color:'#b3afaf',

      },
      accounttypeStack: {
        width: 248,
        height: 50,
        marginLeft: 28,marginTop:10,
      },
  materialButtonLight: {
    width: 223,
    height: 40,
    borderRadius: 20,
    marginTop: 280,
    marginLeft: 84,
    position:'absolute',
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default Serviceproviderreg;

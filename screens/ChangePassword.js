import React, { Component,useState } from "react";
import { StyleSheet, View, Text,TouchableWithoutFeedback,Keyboard,TextInput,Alert } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";


const Changepassword = props => {
  
  const reg = () => {
    if(!oldpassValid || !newpassValid || !confirmpassValid){
    Alert.alert('Wrong input','Please Check the errors in the form ',[
      {text:'Okay'}])
    } else {
  
  props.navigation.navigate({routeName: 'Login'});}
  }


  const checkOldPass = (str) =>
  {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return re.test(str);
  }

  const checkNewPass = (str1) =>
{
    var re1 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re1.test(str1);
  }
  
  const checkConfirmPass = (str2) =>
{
    var re2 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re2.test(str2);
}

  const [oldpassValid,setOldPassIsValid] = useState(false);
  const [oldpassValidationMsg, setOldPassValidationMsg] = useState("");
  const [newpassValid,setNewPassIsValid] = useState(false);
  const [newpassValidationMsg, setNewPassValidationMsg] = useState("");
  const [confirmpassValid,setConfirmPassIsValid] = useState(false);
  const [confirmpassValidationMsg, setConfirmPassValidationMsg] = useState("");


  const oldpassHandler = text =>{
    if(!checkOldPass(text)){

    setOldPassValidationMsg("please enter a correct old pass");
    }
    else {
      setOldPassValidationMsg("");
      setOldPassIsValid(true);
    }
  }

  const newpassHandler = text =>{
    if(!checkNewPass(text)){

    setNewPassValidationMsg("please enter a correct old pass");
    }
    else {
      setNewPassValidationMsg("");
      setNewPassIsValid(true);
    }
  }

  const confirmpassHandler = text =>{
    if(!checkConfirmPass(text)){

    setConfirmPassValidationMsg("please enter a correct old pass");
    }
    else {
      setConfirmPassValidationMsg("");
      setConfirmPassIsValid(true);
    }
  }



  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
     <View style={styles.container}>
      <View style={styles.rect}>
           
          <TextInput style={styles.enteroldpass} 
        placeholder=" Please Enter Your Old Password"
        placeholderTextColor="rgba(189,177,177,1)"
        numberOfLines={1}
            onChangeText={oldpassHandler}></TextInput>
        {!oldpassValid && <Text style={{marginLeft:48,color:'red'}}>{oldpassValidationMsg}</Text>}   
      
      <TextInput    style={styles.enternewpass}
        placeholder=" Please Enter Your New Password"
        placeholderTextColor="rgba(189,177,177,1)"
        numberOfLines={1}
            onChangeText={newpassHandler}></TextInput>
          {!newpassValid && <Text style={{marginLeft:48,color:'red'}}>{newpassValidationMsg}</Text>}
        
     
        <TextInput  style={styles.confirmnewpass} 
        placeholder=" Re-type New Password"
        placeholderTextColor="rgba(189,177,177,1)"   
        numberOfLines={1}
            onChangeText={confirmpassHandler}></TextInput>
          {!confirmpassValid && <Text style={{marginLeft:48,color:'red'}}>{confirmpassValidationMsg}</Text>}
              
        <MaterialButtonLight
          style={styles.materialButtonLight} click={reg}
        ><Text style={styles.caption}>Submit</Text></MaterialButtonLight>
          </View>
    </View></TouchableWithoutFeedback>

      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  enteroldpass: {
    width: 322,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 109,
    marginLeft: 41
  },
  
  enternewpass: {
    width: 322,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 19,
    marginLeft: 41
  },
  
  confirmnewpass: {
    width: 322,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 19,
    marginLeft: 41
  },
 
  
  materialButtonLight: {
    height: 40,
    width: 223,
    borderRadius: 20,
    marginTop: 400,
    marginLeft: 85, position:'absolute'
  },caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default Changepassword;

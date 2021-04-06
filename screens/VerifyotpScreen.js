import React, { useState } from "react";
import { StyleSheet, View, TextInput,Text, TouchableWithoutFeedback,Keyboard,Alert } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";


const VerifyotpScreen =props => {
  
  const [otpValid,setOtpIsValid] = useState(false);
  const [otpValidationMsg, setOtpValidationMsg] = useState("");

  const otpHandler = text =>{
    if(text.trim().length <6 || text.trim().length >6 ){ 
      setOtpValidationMsg("Please enter a valid number");
      setOtpIsValid(false);
  }else{ setOtpValidationMsg("");
    setOtpIsValid(true);  
  }
  }

  const VerifyOtp = () => {if(!otpValid){
    Alert.alert('Wrong input','Please Check the errors in the form ',[
      {text:'Okay'}])
  }else{
    props.navigation.navigate({routeName: 'Login'});
  }
}


  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
    <View style={styles.container}>
      <TextInput placeholder="RESEND OTP" style={styles.resendotp}></TextInput>
      <MaterialButtonLight
        caption="Verify Otp"
        style={styles.materialButtonLight}
        click={VerifyOtp}
      ><Text style={styles.caption}>Verify Otp</Text></MaterialButtonLight>
      <TextInput
        placeholder=" Enter Otp"
        placeholderTextColor="rgba(189,177,177,1)"
        style={styles.enterotp} 
        onChangeText={otpHandler}
        keyboardType='numeric'
      ></TextInput>      
      {!otpValid && <Text style={{marginLeft:88,color:'red'}}>{otpValidationMsg}</Text>} 
    </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  resendotp: {
    color: "#121212",
    width: 82,
    height: 17,
    textAlign: "justify",
    marginTop: 350,
    alignSelf: "center"
  },
  materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    marginTop: 39,
    alignSelf: "center"
  },
  enterotp: {
    color: "#121212",
    height: 40,
    width: 248,
    backgroundColor: "rgba(15,15,15,0.1)",
    marginTop: -180,
    marginLeft: 73
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default VerifyotpScreen;

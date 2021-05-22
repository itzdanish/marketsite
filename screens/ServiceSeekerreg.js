import React, { useEffect,useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback,Keyboard,TextInput,Alert,ScrollView } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import {Picker} from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import db from '../config';
import cache from '../cache';
import { SafeAreaView } from "react-native-safe-area-context";


const ServiceSeekerrreg = ({navigation}) => {
 
  const [selectedCity, setSelectedCity] = useState();
  
  const [checked, setChecked] = React.useState('first');
  const [disable, setDisable] = React.useState(true);

  const [nameValid,setNameIsValid] = useState(false);
  const [nameValidationMsg, setNameValidationMsg] = useState("");
  const [phoneValid,setphoneIsValid] = useState(false);
  const [phoneValidationMsg, setphoneValidationMsg] = useState("");
  const [dobValid,setDobIsValid] = useState(false);
  const [dobValidationMsg, setDobValidationMsg] = useState("");
  const [addressValid,setAddressIsValid] = useState(false);
  const [addressValidationMsg, setAddressValidationMsg] = useState("");
  
  const [personName,setPersonName] = useState("");
  const [phone,setPhone] = useState("");
  const [dob,setDob] = useState("");
  const [address,setAdrress] = useState("");

  const isnameValid = text =>{
    if(text.trim().length <1) return false
    else return true
  }

  const isPhoneValid = text =>{
    if(text.trim().length <10 || text.trim().length >=11) return false
    else return true
  }

  const isDobValid = text =>{
    if(text.trim().length <6) return false
    else return true
  }

  const isAddressValid = text =>{
    if(text.trim().length <1) return false
    else return true
  }

  const reg = () =>{
    if(!nameValid || !phoneValid || !dobValid || !addressValid ){
      if(!isPhoneValid(phone)){
        setphoneIsValid(false);
        setphoneValidationMsg("Please enter a valid phone number");
    }
      else {
        setphoneValidationMsg("");
        setphoneIsValid(true);      
        
      }
      if(!isnameValid(personName)){
        setNameIsValid(false);
        setNameValidationMsg("Please enter your name");
    }
      else {
        setNameValidationMsg("");
        setNameIsValid(true);
        
      }
      if(!isDobValid(dob)){
        setDobIsValid(false);
        setDobValidationMsg("Please enter DOB");
    }
      else {
        setDobValidationMsg("");
        setDobIsValid(true);
        
      }
      if(!isAddressValid(address)){
        setAddressIsValid(false);
        setAddressValidationMsg("Please enter proper address");
    }
      else {
        setAddressValidationMsg("");
        setAddressIsValid(true);
        
      }
      Alert.alert("Check Input added")
    }else{
      try {
        const email=firebase.auth().currentUser.email;             
        db.collection("serviceseeker").doc(email).update({
          phoneno:phone,
          dob:dob,
          name:personName,
          address:address,
          City:selectedCity,

      })    
      navigation.navigate('Categories'); 

    } catch (error) {
      var errorMessage = error.message;
      Alert.alert(errorMessage);
    }
    }
       
    };

  const handleRadioBtn = () => {
    setChecked('second');
    setDisable(true);
  } 

  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
     <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.almostDone}>Almost Done..!</Text>
      <Text style={styles.topline}>Tell us few things about you</Text>
      <Text style={styles.name}>Name</Text>
      <TextInput style={styles.nameinput} placeholder=" Enter Name"
          numberOfLines={1}
          onChangeText={text => setPersonName(text)}>
        </TextInput>
        {!nameValid && <Text style={{marginLeft:25,color:'red'}}>{nameValidationMsg}</Text>}
      <Text style={styles.phone}>Phone No.</Text>
      <TextInput style={styles.phoneinput} placeholder=" Enter Phone Number"
          numberOfLines={1}
          onChangeText={text => setPhone(text)}
          keyboardType='numeric'>
        </TextInput>
        {!phoneValid && <Text style={{marginLeft:25,color:'red'}}>{phoneValidationMsg}</Text>}
      <Text style={styles.city}>City</Text>
      <View style={styles.accounttypeStack}>
      <Picker style={styles.accounttype} id="city" selectedValue={selectedCity} onValueChange={(itemValue,itemIndex)=>
      setSelectedCity(itemValue)}>
      <Picker.Item  label="Select City" value="0"/>
      <Picker.Item label="Mumbai" value="Mumbai" />
      <Picker.Item label="Banglore" value="Banglore" /> 
      </Picker></View>
      <Text style={styles.city}>Date of Birth</Text>
      <TextInput style={styles.cityinput} placeholder=" Enter D.O.B in DD/MM/YYYY format"
          numberOfLines={1}
          onChangeText={text => setDob(text)}>
      </TextInput>
      {!dobValid && <Text style={{marginLeft:25,color:'red'}}>{dobValidationMsg}</Text>}
      <Text style={styles.city}>Address</Text>
      <TextInput style={styles.cityinput} placeholder=" Enter Address" multiline={true}
          numberOfLines={2} 
          onChangeText={text => setAdrress(text)}>
      </TextInput>
      {!addressValid && <Text style={{marginLeft:25,color:'red'}}>{addressValidationMsg}</Text>}
      <View style={{width:'100%',height:120,backgroundColor:"#ffffff",marginVertical:20}}>
      <View >
          <View style={{top:10}}>
        <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={handleRadioBtn}
      /></View>
        
        <Text style={{left:50,top:-30,fontSize:18,width:340}}>
          By Creating Account , You Accept Terms and condition with us
        </Text>
        <MaterialButtonLight disable={false} style={styles.materialButtonLight} click={reg}>
    <Text style={styles.caption}>Continue</Text></MaterialButtonLight>
        </View>
        
      </View>
    
      </SafeAreaView></ScrollView>
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
    marginTop: 70,
    marginLeft: 84,
    position:'absolute',
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default ServiceSeekerrreg;

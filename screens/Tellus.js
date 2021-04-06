import React, { Component,useState } from "react";
import { StyleSheet, View, Text,TouchableWithoutFeedback,Keyboard,TextInput,Alert } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import db from '../config';
//import cache from '../cache'; 

const Tellus = ({route,navigation}) => {
    
    const [chargeValid,setChargeIsValid] = useState(false);
    const [chargeValidationMsg, setChargeValidationMsg] = useState("");
    const [experienceValid,setExperienceIsValid] = useState(false);
    const [experienceValidationMsg, setExperienceValidationMsg] = useState("");
  
    
  const [charge, setCharge] = useState("");
  const [experience,setExperience] = useState("");

  const CategoryId = route.params.CategoryId;
  console.log(CategoryId);
  const ischargeValid = text =>{
    if(text.trim().length <1) return false
    else return true
  }  

  const isexperienceValid = text =>{
    if(text.trim().length <1) 
      
         return false
        else return true
      }



       const reg = () =>{
        if(!charge|| !experience  ){
          if(!ischargeValid(charge)){
            setChargeIsValid(false);
            setChargeValidationMsg("Please enter a valid Charge");
        }
          else {
            setChargeValidationMsg("");
            setChargeIsValid(true);      
            
          }
          if(!isexperienceValid(experience)){
            setExperienceIsValid(false);
            setExperienceValidationMsg("Please enter a valid Experience");
        }
          else {
            setExperienceValidationMsg("");
            setExperienceIsValid(true);
            
          }
          Alert.alert("Check Input added")
        }else{
          

          try {
            var u_id=firebase.auth().currentUser.uid;             
            db.collection("users").doc("0ulhXKaKz18ESNX98JCi").collection("serviceprovider").doc(u_id).update({
              fixedcharge:charge,
              experience :experience, 
              category_type: CategoryId,
          })    
          navigation.navigate('NewLead'); 
    
        } catch (error) {
          var errorMessage = error.message;
          Alert.alert(errorMessage);
          }
          




        }  
        };
  
  
  


  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
     
    <View style={styles.container}>
      <View style={styles.rect}>
        <TextInput style={styles.fixedcharge} placeholder="  Fixed Charge"
            numberOfLines={1}
            onChangeText={text => setCharge(text)}
            keyboardType='decimal-pad'>
          </TextInput>
          {!chargeValid && <Text style={{marginLeft:50,color:'red'}}>{chargeValidationMsg}</Text>}
        <TextInput style={styles.experienceinput}  placeholder="  Total Experience in years"
            onChangeText={text => setExperience(text)}
          keyboardType='decimal-pad'>
            
          </TextInput>
          {!experienceValid && <Text style={{marginLeft:50,color:'red'}}>{experienceValidationMsg}</Text>}
          
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
  materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    marginTop: 260,
    alignSelf: "center",position:'absolute'
  },
  tellUsAboutYou: {
    color: "#121212",
    height: 24,
    width: 334,
    fontSize: 24,
    marginTop: 61,
    marginLeft: 21
  },
  rect: {
    width: 393,
    height: 662,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5,
    position:'absolute'

  },
  fixedcharge: {
    width: 318,
    height: 54,
    backgroundColor: "rgba(255,251,251,1)",
    marginTop: 66,
    marginLeft: 48,
  },
  fixedCharge2: {
    color: "#121212",
    height: 19,
    width: 132,
    fontSize: 20,
    opacity: 0.67,
    marginTop: 17,
    marginLeft: 9
  },
  experienceinput: {
    width: 318,
    height: 54,
    backgroundColor: "rgba(255,251,251,1)",
    marginTop: 29,
    marginLeft: 48
  },
  experience: {
    color: "#121212",
    height: 19,
    width: 132,
    fontSize: 20,
    opacity: 0.56,
    marginTop: 17,
    marginLeft: 9
  },
  button: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 100,
    marginTop: 49,
    marginLeft: 35
  },
  submit: {
    color: "#121212",
    height: 19,
    width: 120,
    fontSize: 20,
    textAlign: "left",
    marginTop: 11,
    marginLeft: 109
  },caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default Tellus;
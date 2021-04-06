import React, {useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import {Picker} from '@react-native-picker/picker';
import * as firebase from 'firebase';
import db from "../config";
import auth from '@react-native-firebase/app';


const checkPassword = (str) =>
{
    var re =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
}

const checkemail = (str) =>
{
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(str);
}

const RegistrationScreen = ({navigation}) => {

  const pressy =
    ()=>{
      setIsSecureEntry((prev) => !prev);
    }
  
  const [selectedUser, setSelectedUser] = useState();
  
  const [emailValid,setemailIsValid] = useState(false);
  const [passwordIsValid,setPasswordIsValid] = useState(false);
  const [emailValidationMsg, setemailValidationMsg] = useState("");
  const [passwordValidationMsg, setPasswordValidationMsg] = useState("");
  const [isSecureEntry,setIsSecureEntry] = useState(true);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");  const [accountype,setAccountType] = useState("");

  const isemailValid = text =>{
    if(!checkemail(text)) return false;
    return true;
  }

  const isPasswordvalid = text =>{
    if(!checkPassword(text)) return false;
    return true;
  }    

      const userSignup = async() =>{
        if(email || password ){
          try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email,password);
            let u_id=firebase.auth().currentUser.uid;
            if(selectedUser=='ServiceProvider'){              
            db.collection("users").doc("0ulhXKaKz18ESNX98JCi").collection("serviceprovider").doc(u_id).set({
              email,
              password,
              accountype:selectedUser,
              serviceprovider_id:u_id,
              name:"",
              phoneno:"",
              dob:"",
              category_id:"",
              finalCharge:"",
              experience:"",
              address:"",
              City:"",

          })
        }
          else{
            db.collection("users").doc("0ulhXKaKz18ESNX98JCi").collection("serviceseeker").doc(u_id).set({
              email,
              accountype:selectedUser,
              serviceprovider_id:u_id,
              name:"",
              phoneno:"",
              dob:"",
              address:"",
              City:"",
            })
          }
          navigation.navigate('Login'); 
          
          } catch (error) {
            var errorMessage = error.message;
            Alert.alert(errorMessage);
          }
        }else{
          if(!isEmailValid(Email)){
            setEmailIsValid(false);
            setEmailValidationMsg("Please enter a valid email address");
        }
          else {
            setEmailValidationMsg("");
            setEmailIsValid(true);      
            
          }
          if(!isPasswordvalid(password)){
            setPasswordIsValid(false);
            setPasswordValidationMsg("Must be 6 Char long and use combinations");
        }
          else {
            setPasswordValidationMsg("");
            setPasswordIsValid(true);
            
          }
        }
         
        }

  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(148,131,131,1)" />
      <View style={styles.textStack}>
        <Text style={styles.text}>Register</Text>
        <MaterialButtonLight
          style={styles.materialButtonLight} click={userSignup}
        ><Text style={styles.caption}>Register</Text></MaterialButtonLight>
      </View>
      <Text style={styles.regline}>
        Join Us,{"\n"}Let Us help you get your services
      </Text>
      <View>
      <TextInput placeholder="  Email Address" 
      style={styles.phoneno} 
      onChangeText={text => setemail(text)}
      id="phoneno"
      />
        <View style={{height:20}}>
      {!emailValid && <Text style={{marginLeft:88,color:'red'}}>{emailValidationMsg}</Text>} 
        </View>

      </View>
      <View style={styles.accounttypeStack}>
      <Picker style={styles.accounttype} id="accountype" selectedValue={selectedUser} onValueChange={(itemValue,itemIndex)=>
      setSelectedUser(itemValue)}>
      <Picker.Item  label="Account Type" value="0"/>
      <Picker.Item label="Service Seeker" value="ServiceSeeker" />
      <Picker.Item label="Service Provider" value="ServiceProvider" /> 
      </Picker>
      </View>
      <Text onPress={()=> pressy()} style={{marginLeft:260, marginBottom:-30}}
      >{isSecureEntry ? 'Show' : 'Hide'}</Text>
      <View>

      <TextInput
        placeholder="  Password" 
        numberOfLines={1}
        secureTextEntry={isSecureEntry}
        style={styles.password}
        onChangeText={text => setPassword(text)}
        id="password"
      />
      <View style={{height:20}}>
     {!passwordIsValid && <Text style={{marginLeft:88,color:'red'}}>{passwordValidationMsg}</Text>} 
      </View>
      </View>
      <View style={styles.downlineRow}>
        <Text style={styles.downline}>Already have an account?</Text>
        <Text style={styles.login} onPress={() => {
            navigation.push('Login');
          }}>Login</Text>
      </View>
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/Ellipse_1.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/images/Ellipse_2.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
    </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 0,
    borderColor: "#000000",
    borderTopRightRadius: 0,
    borderRadius: 22,

  },
  text: {
    top: 26,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    textAlign: "justify",
    left: 98
  },
  materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    alignSelf: "center",
    marginTop:23
  },
  textStack: {
    width: 248,
    height: 43,
    marginTop: 504,
    marginLeft: 73
  },
  regline: {
    color: "#121212",
    fontSize: 17,
    marginTop: -318,
    alignSelf: "center"
  },
  phoneno: {
    color: "#121212",
    height: 40,
    width: 248,
    backgroundColor: "rgba(255,251,251,1)",
    marginTop: 33,
    marginLeft: 79,
  },
  accounttype: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    height: 40,
    width: 248,
    backgroundColor: "rgba(255,251,251,1)",
    color:'#b3afaf',

      },
  accounttypeStack: {
    width: 248,
    height: 40,
    marginLeft: 79
  },
  password: {
    color: "#121212",
    height: 40,
    width: 248,
    backgroundColor: "rgba(255,251,251,1)",
    marginTop: 33,
    marginLeft: 79
  },
  forgotPassword: {
    color: "rgba(196,196,196,1)",
    fontSize: 16,
    marginTop: 64,
    marginLeft: 140
  },
  downline: {
    color: "#121212",
    fontSize: 16,
    marginTop: 3
  },
  login: {
    color: "rgba(196,196,196,1)",
    fontSize: 18,
    marginLeft: 6
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  },
  downlineRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 75,
    marginRight: 63
  },
  image2: {
    top: 0,
    left: -10,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image3: {
    top: 0,
    left: 136,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2Stack: {
    width: 336,
    height: 204,
    marginTop: -582,
    marginLeft: -60
  }
});

export default RegistrationScreen;
 

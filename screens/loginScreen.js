import React, { useState } from "react";
import { StyleSheet, View, Image,Text, TextInput ,ScrollView,TouchableWithoutFeedback,Keyboard,Alert,KeyboardAvoidingView} from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import {Picker} from '@react-native-picker/picker';
import * as firebase from 'firebase';
import db from '../config';
import cache from '../cache';

const checkPassword = (str) =>
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str)
}

const checkemail = (str) =>
{
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(str)
}

const Login = ({navigation}) => {

    const pressy =
    ()=>{
      setIsSecureEntry((prev) => !prev);
    }

     const [selectedUser, setSelectedUser] = useState();

  const [emailValid,setemailIsValid] = useState(false)
  const [emailValidationMsg, setemailValidationMsg] = useState("")
  const [passwordValidationMsg, setPasswordValidationMsg] = useState("")
  const [passwordIsValid,setPasswordIsValid] = useState(false)
  const [isSecureEntry,setIsSecureEntry] = useState(true)

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  const isemailValid = text =>{
    if(!checkemail(text)) return false;
    return true;
  }

  const isPasswordvalid = text =>{
    if(!checkPassword(text)) return false;
    return true;
  }

 
  
  const UserLogin = async() =>{
    if(email || password ){
      try {
        const result = await firebase.auth().signInWithEmailAndPassword(email,password);
            
         if (selectedUser == "ServiceProvider") {
          const querySnap =  db.collection("serviceprovider").doc(email);
          querySnap.get().then(async (doc) => {
            if (doc.exists) {             
              const user = doc.data();
              cache.store('user', user)                    
                    var name = doc.data().name
                  if (name ===""){     
                    navigation.navigate('ServiceProviderreg')            
                      }else{           
                      navigation.navigate('NewLead')
                  }
            }else{
              Alert.alert("Invalid Account Type Selected")
            }
          });
          //var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
          
          
        } else {
          const querySnap =  db.collection("serviceseeker").doc(email)
          querySnap.get().then( async (doc) => {
            if (doc.exists) {
              const user = doc.data()
              cache.store('user', user)
              var name = doc.data().name
              console.log("Document name:", doc.data().name)
            if (name ===""){     
              navigation.navigate('ServiceSeekerreg')           
                }else{           
                  navigation.navigate('Categories')
                }
            }else{
              Alert.alert("Invalid Account Type Selected")
              }
        });
        
        
      }
      } catch (error) {
        var errorMessage = error.message
        Alert.alert(errorMessage)
      }
    }else{
      if(!isemailValid(email)){
        setemailIsValid(false)
        setemailValidationMsg("Please enter a valid email address")
    }
      else {
        setemailValidationMsg("")
        setemailIsValid(true)
        
      }
      if(!isPasswordvalid(password)){
        setPasswordIsValid(false);
        setPasswordValidationMsg("Must be 6 Char long and use combinations")
    }
      else {
        setPasswordValidationMsg("")
        setPasswordIsValid(true)
        
      }
    }
     
    }

  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
    <ScrollView style={styles.container}>
       <View style={styles.image4Stack}>
        <Image
          source={require("../assets/images/Ellipse_1.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Image
          source={require("../assets/images/Ellipse_2.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
      </View>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/login.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/maintainence.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <TextInput
        placeholder="  Email address"
        placeholderTextColor="rgba(203,194,194,1)"
        style={styles.emailNumber} 
        onChangeText={text => setemail(text)}
      ></TextInput>
      <View style={{height:20}}>
      {!emailValid && <Text style={{marginLeft:88,color:'red'}}>{emailValidationMsg}</Text>} 
        </View> 
      <Picker style={styles.accounttype} selectedValue={selectedUser} onValueChange={(itemValue,itemIndex)=>
      setSelectedUser(itemValue)}>
      <Picker.Item  label="Account Type" value="0"/>
      <Picker.Item label="Service Seeker" value="ServiceSeeker"/>
      <Picker.Item label="Service Provider" value="ServiceProvider" / > 
      </Picker>
      <Text onPress={()=> pressy()} style={{marginLeft:260, marginBottom:0,marginTop:50}}
      >{isSecureEntry ? 'Show' : 'Hide'}</Text>
      <TextInput
        placeholder="  Password"
        placeholderTextColor="rgba(203,194,194,1)"
        style={styles.password} numberOfLines={1}
        secureTextEntry={isSecureEntry} 
        onChangeText={text => setPassword(text)}
      ></TextInput>
     <View style={{height:20}}>
     {!passwordIsValid && <Text style={{marginLeft:88,color:'red'}}>{passwordValidationMsg}</Text>} 
      </View>
      <Text style={{color: "rgba(196,196,196,1)",fontSize: 16,marginTop: 4,marginLeft: 140}} onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>Forgot Password</Text>
      <Text style={styles.bottomline}>Don't have an account?</Text>
      <Text style={styles.Register} onPress={() => {
            navigation.navigate("Registration");
          }}>Register</Text>
      <MaterialButtonLight
        style={styles.materialButtonLight} click={UserLogin}
      ><Text style={styles.caption}>Login</Text></MaterialButtonLight>
    </ScrollView></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "rgba(235,223,223,1)",
    backgroundColor: "rgba(255,255,255,1)",
    width:'100%',
  },
  image: {
    width: '60%',
    height: 200
  },
  image2: {
    width: "40%",
    height: 117,
    marginTop: 41
  },
  imageRow: {
    height: 200,
    flexDirection: "row",
    marginTop: -30,
    marginLeft: 25,
    marginRight: 42
  },
  emailNumber: {
    color: "#121212",
    height: 45,
    width: "60%",
    backgroundColor: "rgba(255,251,251,0.74)",
    marginTop: 23,
    alignSelf: "center",
  },
  accounttype: {
    position: "absolute",
    height: 45,
    width: "60%",
    backgroundColor: "rgba(255,251,251,1)",
    alignContent:'center',
    top: 0,
    left:78,
    color:'#b3afaf',
     marginTop:430,
  },
  image3: {
    top: 19,
    left: 201,
    width: 22,
    height: 10,
    position: "absolute"
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  },
  password: {
    color: "#121212",
    height: 45,
    width: "60%",
    backgroundColor: "rgba(255,251,251,1)",
    marginTop: 5,
    alignSelf: "center"
  },
  materialButtonLight: {
    height: 40,
    width: "60%",
    borderRadius: 20,
    marginTop: 14,
    marginLeft: 85
  },
  image4: {
    marginTop: -30,
    left: -25,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image5: {
    top: -20,
    marginLeft: 110,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image4Stack: {
    width: 336,
    height: 210,
    marginTop: -42,
    marginLeft: -40
  },
  Register: {
    color: "rgba(196,196,196,1)",
    fontSize: 15,
    marginLeft: 251,marginTop:-20
  },
  bottomline:{color:'#000000',
  marginLeft:90,
  fontSize: 15,marginTop:3}
});

export default Login;

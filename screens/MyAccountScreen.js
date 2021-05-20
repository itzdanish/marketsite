import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import 'firebase/storage';
import db from '../config';
import cache from '../cache';
import { Alert } from "react-native";


const  MyAccountScreen = ({navigation}) => {

  const [user, setUser] = useState()
  const [phoneno, setPhoneno] = useState()  
  const [image, setImage] = useState();
  
  const userid=firebase.auth().currentUser.email;
  
  const getSeekerDetails = async () => {
    var docRef = db.collection("serviceseeker").doc(userid);
    docRef.get().then((doc) => {
      setUser(doc.data().name)
      setPhoneno(doc.data().phoneno)
      setImage(doc.data().image)
  })}
   

  useEffect(()=>{
    getSeekerDetails();
  },[])

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('Signout successful')
      navigation.navigate('Login')
    }).catch((error) => {
    })
  }


  
  const uriToBlob = (uri) => {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
        
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    });

  }

  const uploadToFirebase = (blob) => {
  
    return new Promise((resolve, reject)=>{
    
      var storageRef = firebase.storage().ref();

      const uploadTask = storageRef.child(`/ProfilePic/serviceseeker/${userid}.jpg`).put(blob, {
        contentType: 'image/jpeg'
      })
    uploadTask.on('state_changed', 
  (snapshot) => {
   
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    resolve(snapshot);
   
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  async () => {
    await uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          
     db.collection("serviceseeker").doc(userid).update({
      image:downloadURL,
    }) 

    });
  }
);

    });

  

  }      


  const handleOnPress = () => { 

    ImagePicker.launchCameraAsync({ 
      mediaTypes: "Images"
    }).then((result)=>{ 

      if (!result.cancelled) {
        // User picked an image
        const {height, width, type, uri} = result;
      
        const link = uriToBlob(uri);
        
        return link
      }

    }).then((blob)=>{
      
      return uploadToFirebase(blob);

    }).then((snapshot)=>{
      
      Alert.alert("Profile Changed")
   
    }).catch((error)=>{

      throw error;

    }); 

  }

  
  return (
    <View style={styles.container}>
      <View style={styles.profiledetail}>
        <View style={styles.profilepicRow}>
          <TouchableOpacity onPress={()=>handleOnPress()}>
          <Image
            source={{uri:image}}
            resizeMode="contain"
            style={styles.profilepic}
          ></Image>
          </TouchableOpacity>
          <View style={styles.profilenameColumn}>
            <Text style={styles.profilename}>{user}</Text>
            <Text style={styles.emailandphone}>
              {userid}
              {"\n"}{phoneno}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationtab} onPress={() => {
        navigation.navigate('NotificationScreen');
      }}>
        <View style={styles.notificationstabnameRow}>
          <Text style={styles.notificationstabname}>Notifications</Text>
          <Image
            source={require("../assets/images/next.png")}
            resizeMode="contain"
            style={styles.notificationnext}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentHistorytab} onPress={() => {
        navigation.navigate('PaymentHistory');
      }}>
        <View style={styles.paymentHistorytabnameRow}>
          <Text style={styles.paymentHistorytabname}>Payment History</Text>
          <Image
            source={require("../assets/images/next.png")}
            resizeMode="contain"
            style={styles.paymenthistorynext}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.changePasswordTab} onPress={() => {
        navigation.navigate('ChangePassword');
      }}>
        <View style={styles.changePasswordtabnameRow}>
          <Text style={styles.changePasswordtabname}>Change Password</Text>
          <Image
            source={require("../assets/images/next.png")}
            resizeMode="contain"
            style={styles.changepasswordnext}
          ></Image>
        </View>
      </TouchableOpacity>
      <MaterialButtonLight
          style={styles.materialButtonLight} click={logout}
        ><Text style={styles.caption}>Logout</Text></MaterialButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:30,
  },
  materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center"
  },
  profiledetail: {
    width: '100%',
    height: 100,
    backgroundColor: "rgba(196,196,196,1)",
    marginTop: 5,
  },
  profilepic: {
    width: 78,
    height: 58,
    borderRadius: 80,
  },
  profilename: {
    color: '#000000',
    fontSize: 20,
    marginTop:-10,
    fontWeight:'bold',
  },
  emailandphone: {
    color: "#121212",
    lineHeight: 17,
    width:300,
    marginTop: 3,
  },
  profilenameColumn: {
    width: 175,
    marginLeft: 17,
    marginTop: 7,
    marginBottom: 1
  },
  editbutton: {
    color: "rgba(83,104,193,1)",
    marginLeft: 65,
    marginTop: 1
  },
  profilepicRow: {
    height: 58,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 5,
    marginRight: 14
  },
  notificationtab: {
    width: '100%',
    height: 66,
    backgroundColor: "rgba(230,230,230,0.14)",
    flexDirection: "row",
  },
  notificationstabname: {
    color: "#121212",
    lineHeight: 17,
    marginTop: 6,
    fontWeight:'bold',
  },
  notificationnext: {
    width: 19,
    height: 15,
    marginLeft: 260
  },
  notificationstabnameRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 20,
    marginTop: 18
  },
  paymentHistorytab: {
    width: '100%',
    height: 66,
    backgroundColor: "rgba(230,230,230,0.15)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
    flexDirection: "row",
    marginLeft: 0
  },
  paymentHistorytabname: {
    color: "#121212",
    lineHeight: 17,
    fontWeight:'bold',
  },
  paymenthistorynext: {
    width: 19,
    height: 15,
    marginLeft: 235
  },
  paymentHistorytabnameRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 20,
    marginTop: 25,
    fontWeight:'bold',
  },
  changePasswordTab: {
    width: '100%',
    height: 66,
    backgroundColor: "rgba(230,230,230,0.24)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.24)",
    flexDirection: "row",
  },
  changePasswordtabname: {
    color: "#121212",
    lineHeight: 17,
    fontWeight:'bold',
  },
  changepasswordnext: {
    width: 19,
    height: 15,
    marginLeft: 225
  },
  changePasswordtabnameRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 20,
    marginTop: 25
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default MyAccountScreen;

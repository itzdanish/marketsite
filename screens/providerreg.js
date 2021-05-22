import React, {useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image , Alert} from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import Svg, { Ellipse } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import 'firebase/storage';
import db from '../config';


function providerreg({navigation}) {
  
  const userid=firebase.auth().currentUser.email;
  const [image, setImage] = useState(require("../assets/images/plus.png"));

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

      const uploadTask = storageRef.child(`/ProfilePic/serviceprovider/${userid}.jpg`).put(blob, {
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
          
     db.collection("serviceprovider").doc(userid).update({
      image:downloadURL,
    }) 

    });
  }
);

    });

  

  }      


  const uploadToFirebasedoc = (blob) => {
  
    return new Promise((resolve, reject)=>{
    
      var storageRef = firebase.storage().ref();

      const uploadTask = storageRef.child(`/ProfileDocument/serviceprovider/${userid}/address.jpg`).put(blob, {
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
          
     db.collection("document").doc(userid).collection("address").doc(userid).update({
      serviceProviderId:userid,
      image:downloadURL,
    }) 

    });
  }
);

    });


  }      

  const uploadToFirebasecertificate = (blob) => {
  
    return new Promise((resolve, reject)=>{
    
      var storageRef = firebase.storage().ref();

      const uploadTask = storageRef.child(`/ProfileDocument/serviceprovider/${userid}/certicate.jpg`).put(blob, {
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
          
     db.collection("document").doc(userid).collection("certificate").doc(userid).update({
      serviceProviderId:userid,
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
      
      Alert.alert("Profile Pic Updated")
   
    }).catch((error)=>{

      throw error;

    }); 

  }

  const handleOnPressDoc = () => { 

    ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: "Images"
    }).then((result)=>{ 

      if (!result.cancelled) {
        // User picked an image
        const {height, width, type, uri} = result;
      
        const link = uriToBlob(uri);
        
        return link
      }

    }).then((blob)=>{
      
      return uploadToFirebasedoc(blob);

    }).then((snapshot)=>{
      
      Alert.alert("Address Proof Uploaded")
   
    }).catch((error)=>{

      throw error;

    }); 

  }

  const handleOnPressDocCertificate = () => { 

    ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: "Images"
    }).then((result)=>{ 

      if (!result.cancelled) {
        // User picked an image
        const {height, width, type, uri} = result;
      
        const link = uriToBlob(uri);
        
        return link
      }

    }).then((blob)=>{
      
      return uploadToFirebasecertificate(blob);

    }).then((snapshot)=>{
      
      Alert.alert("certificate Uploaded")
   
    }).catch((error)=>{

      throw error;

    }); 

  }
    const reg = () => {
        navigation.navigate('NewLead');
      }

      
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.mainStack}>
        <View style={styles.main}>
          <TouchableOpacity style={styles.document} onPress={()=>handleOnPressDoc()}>
            <View style={styles.onboardingDocumentsColumnRow}>
              <View style={styles.onboardingDocumentsColumn}>
                <Text style={styles.onboardingDocuments}>
                  Onboarding Documents
                </Text>
                <Text style={styles.panCardAddressProof}>
                  Pan Card or Address Proof
                </Text>
              </View>
              <Image
                source={require("../assets/images/next.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.certi} onPress={()=>handleOnPressDocCertificate()}>
          <View style={styles.awardColumnRow}>
            <View style={styles.awardColumn}>
              <Text style={styles.award}>Awards and Certificates (if any)</Text>
              <Text style={styles.certificate}>
                Certification of Your profile for better reach
              </Text>
            </View>
            <Image
              source={require("../assets/images/next.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.guidelinebox}>
          <View style={styles.noteboxRow}>
            <View style={styles.notebox}>
              <Text style={styles.note}>Note</Text>
            </View>
            <Text style={styles.guidline}>
              Enter Proper Details and Documents. {"\n"}Based on the address
              proof there will be Background Verification and Skill Check for
              you before getting work. {"\n"}
              (Please Enter document and certificate in jpg format)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.profileProgressColumnRow}>
        <View style={styles.profileProgressColumn}>
          <Text style={styles.profileProgress}>Profile Progress</Text>
          <Text style={styles.tell}>Complete Below Step to Join us</Text>
        </View>
        <TouchableOpacity onPress={()=>handleOnPress()}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 100 100" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={50}
              cy={50}
              rx={50}
              ry={50}
            ></Ellipse>
          </Svg>
          <Image
            source={image}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.addPhoto}>Add Photo</Text>
        </View>
        </TouchableOpacity>
      </View>
      <MaterialButtonLight style={styles.materialButtonLight} click={reg}>
    <Text style={styles.caption}>Submit for Approval</Text></MaterialButtonLight>
    </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  main: {
    top: 0,
    width: 392,
    height: 608,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 0
  },
  materialButtonLight: {
    width: 223,
    height: 40,
    borderRadius: 20,
    marginTop: 525,
    marginLeft: 84,
  },
  document: {
    width: 391,
    height: 73,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 98,
    marginTop: 2,
    marginLeft: 1
  },
  onboardingDocuments: {
      width:300,
      fontWeight:'bold',
    color: "#121212",
    fontSize: 17
  },
  panCardAddressProof: {
    width:300,
    color: "#121212",
    fontSize: 17,
    marginTop: 4,
    marginLeft: 1
  },
  onboardingDocumentsColumn: {
    width: 181
  },
  image2: {
    width: 20,
    height: 20,
    marginLeft: 166,
    marginTop: 14
  },
  onboardingDocumentsColumnRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 14,
    marginRight: 10
  },
  certi: {
    top: 77,
    width: 391,
    height: 73,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 2
  },
  award: {
    color: "#121212",
    fontSize: 17,
    width:300,
    fontWeight:'bold',
  },
  certificate: {
    width:370,
    color: "#121212",
    fontSize: 17,
    marginTop: 8
  },
  awardColumn: {
    width: 323,
      
  },
  image3: {
    width: 20,
    height: 20,
    marginLeft: 22,
    marginTop: 21
  },
  awardColumnRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 11
  },
  guidelinebox: {
    top: 152,
    left: 2,
    width: 391,
    height: 122,
    position: "absolute",
    backgroundColor: "rgba(229,163,62,1)",
    flexDirection: "row"
  },
  notebox: {
    width: 60,
    height: 22,
    backgroundColor: "rgba(255,63,2,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop:27
  },
  note: {
    color: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 13
  },
  guidline: {
    color: "#121212",
    width: 277,
    height: 105,
    marginLeft: 23,
    fontWeight:'bold',
  },
  noteboxRow: {
    height: 77,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 26,
    marginTop: 11
  },
  mainStack: {
    width: 393,
    height: 608,
    marginTop: 150,
    marginLeft: -1
  },
  profileProgress: {
    color: "#121212",
    width: 221,
    fontSize: 30,
    fontWeight:'bold',
  },
  tell: {
    color: "#121212",
    height: 52,
    width: 244,
    fontSize: 21,
    marginTop: 5,
    marginLeft: 2
  },
  profileProgressColumn: {
    width: 246
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    position: "absolute",
    opacity: 0.74
  },
  image: {
    top: 10,
    left: 25,
    width: 20,
    height: 20,
    position: "absolute"
  },
  addPhoto: {
    top: 36,
    left: 7,
    position: "absolute",
    color: "#121212",
    fontSize: 12
  },
  ellipseStack: {
    width: 70,
    height: 70,
    marginLeft: 49,
    marginTop: 13
  },
  profileProgressColumnRow: {
    height: 146,
    flexDirection: "row",
    marginTop: -713,
    marginLeft: 11,
    marginRight: 17
  },caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default providerreg;

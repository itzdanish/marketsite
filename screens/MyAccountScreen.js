import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import * as firebase from 'firebase';
import cache from '../cache';

const  MyAccountScreen = ({navigation}) => {

  const [user, setUser] = useState()
  const [email, setEmail] = useState()
  const [phoneno, setPhoneno] = useState()  
  const [image, setImage] = useState()


  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('Signout successful')
      navigation.navigate('Login')
    }).catch((error) => {
    })
  }

  const getUser = async () => {
    const user = await cache.get('user')
    
    setUser(user.name)
    setEmail(user.email)
    setPhoneno(user.phoneno)
    setImage(user.image)

  }
  getUser();
  

  var images = '../assets/images/profile_pic/danishkhan.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.profiledetail}>
        <View style={styles.profilepicRow}>
          <Image
            source={require(images)}
            resizeMode="contain"
            style={styles.profilepic}
          ></Image>
          <View style={styles.profilenameColumn}>
            <Text style={styles.profilename}>{user}</Text>
            <Text style={styles.emailandphone}>
              {email}
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

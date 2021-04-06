import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TouchableWithoutFeedback, Keyboard } from "react-native";


function serviceseekermenu(props) {
  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
    <View style={styles.container}>
      
      <View style={styles.downmenuStack}>
        <View style={styles.downmenu}></View>
        <TouchableOpacity style={styles.button} onPress={() => {
        props.navigation.navigate({routeName: 'Chat'});
      }}>
          <View style={styles.home2Stack}>
            <Text style={styles.home2}>Home</Text>
            <Image
              source={require("../assets/images/home.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.chatStack}>
            <Text style={styles.chat}>Chat</Text>
            <Image
              source={require("../assets/images/chat.png")}
              resizeMode="contain"
              style={styles.image15}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <View style={styles.myAccountStack}>
            <Text style={styles.myAccount}>My Account</Text>
            <Image
              source={require("../assets/images/files.png")}
              resizeMode="contain"
              style={styles.image16}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <View style={styles.accountStack}>
            <Text style={styles.account}>Account</Text>
            <Image
              source={require("../assets/images/user.png")}
              resizeMode="contain"
              style={styles.image17}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
      
      </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(234,218,218,1)",
    backgroundColor: "rgba(238,238,238,1)",
  },
  
  downmenu: {
    top: 0,
    left: 0,
    width: 382,
    height: 78,
    position: "relative",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 2,
    marginBottom:-10,
    marginLeft:5,
   },
   button: {
   top: 1,
   left: 1,
    width: 96,
    height: 78,
     position: "relative",
     backgroundColor: "rgba(255,255,255,1)"
   },
  home2: {
    top: 45,
    left: 0,
    position: "relative",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  image13: {
    top: 0,
    left: 0,
    width: 42,
    height: 47,
    position: "relative"
  },
  home2Stack: {
    width: 43,
    height: 64,
    marginTop: 5,
    marginLeft: 26
  },
  button2: {
    top: 1,
    left: 95,
    width: 96,
    height: 78,
    position: "relative",
    backgroundColor: "rgba(255,255,255,1)"
  },
  chat: {
    top: 41,
    left: 3,
    position: "relative",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  image15: {
    top: 0,
    left: 0,
    width: 41,
    height: 47,
    position: "relative"
  },
  chatStack: {
    width: 41,
    height: 60,
    marginTop: 9,
    marginLeft: 29
  },
  button3: {
    top: 1,
    left: 189,
    width: 96,
    height: 78,
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.81)"
  },
  myAccount: {
    top: 46,
    left: 0,
    position: "relative",
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 16,
    fontSize: 16
  },
  image16: {
    top: 0,
    left: 20,
    width: 42,
    height: 47,
    position: "relative"
  },
  myAccountStack: {
    width: 85,
    height: 62,
    marginTop: 6,
    marginLeft: 7
  },
  button4: {
    top: 1,
    left: 285,
    width: 96,
    height: 78,
    position: "relative",
    backgroundColor: "rgba(255,255,255,1)"
  },
  account: {
    top: 44,
    left: 0,
    position: "relative",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  image17: {
    top: 0,
    left: 7,
    width: 42,
    height: 47,
    position: "relative"
  },
  accountStack: {
    width: 59,
    height: 63,
    marginTop: 5,
    marginLeft: 19
  },
  downmenuStack: {
    width: 382,
    height: 79,
    marginTop: 589,
    marginLeft: 1
  },
});

export default serviceseekermenu;

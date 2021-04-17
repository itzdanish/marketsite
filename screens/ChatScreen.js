import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ChatScreen = ({navigation}) =>{
  return (
    <TouchableWithoutFeedback onPress = { () =>{
      Keyboard.dismiss();
   } } >
    <View style={styles.container}>
      <TextInput
        style={styles.materialSearchBar}
        placeholder=" Search.."
        pa
          numberOfLines={1}>
      </TextInput>
      <TouchableOpacity style={styles.list1} onPress={() => {
        navigation.navigate('Chatwindow');
      }}>
        <View style={styles.profilepicRow} >
          <Image
            source={require("../assets/images/user.png")}
            resizeMode="contain"
            style={styles.profilepic}
          ></Image>
          <View style={styles.pankajKumarColumn}>
            <Text style={styles.pankajKumar}>Pankaj Kumar</Text>
            <Text style={styles.lastmsg}>
              Okay, i’ll arrive at 9.00 pm tomo...
            </Text>
          </View>
          <Text style={styles.timeordate}>7.30 pm</Text>
        </View>
      </TouchableOpacity>
    </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:30,
  },
  
  materialSearchBar: {
    height: 46,
    width: 382,
    overflow: "visible",
    marginLeft:6,
    marginTop:5,
    backgroundColor:"#FFFFFF"
  },
  list1: {
    width: 393,
    height: 86,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  profilepic: {
    width: 38,
    height: 48
  },
  pankajKumar: {
    color: "#121212",
    lineHeight: 18,
    marginLeft: 1
  },
  lastmsg: {
    color: "#121212",
    marginTop: 6
  },
  pankajKumarColumn: {
    width: 200,
    marginLeft: 17,
    marginTop: 5,
    marginBottom: 2
  },
  timeordate: {
    color: "#121212",
    marginLeft: 64,
    marginTop: 7
  },
  profilepicRow: {
    height: 48,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 11,
    marginRight: 14
  }
});

export default ChatScreen;

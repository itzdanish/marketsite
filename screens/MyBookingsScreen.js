import React, { useState,useEffect } from "react";
import { StyleSheet, RefreshControl, TouchableOpacity, Text,FlatList, SafeAreaView } from "react-native";
import * as firebase from 'firebase';
import db from '../config';
import {CATEGORIES} from '../Data/dummy-data';

const renderGridItem = (itemData) =>{
  var unixtimestamp =itemData.item.date_time.seconds;
  // Months array
  var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // Convert timestamp to milliseconds
  var date = new Date(unixtimestamp*1000);
  // Year
  var year = date.getFullYear();
  // Month
  var month = months_arr[date.getMonth()];
  // Day
  var day = date.getDate();
  // Hours
  var hours = date.getHours();
 
  // Minutes
  var minutes = "0" + date.getMinutes();
 
  // Display date time in MM-dd-yyyy h:m:s format
  var convdataTime = month+'-'+day+'-'+year+' at '+hours + ':' + minutes.substr(-2);
  return <TouchableOpacity style={styles.list1}>
        <Text style={styles.listname}>{itemData.item.category_name}</Text>
        <Text style={styles.timeanddate}>{convdataTime}</Text>
      </TouchableOpacity>
}

const Mybookings = ({navigation}) =>{
  const result = []
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState([]);
  const u_id=firebase.auth().currentUser.uid;
  const getBooking = async () => {
    await db.collection("booking").doc(u_id).collection(u_id).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          result.push(doc.data());
      });
  });
  setBooking(result);
  setLoading(false);
  }

  useEffect(()=>{
    getBooking();
  })

  if(loading) return null
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
    keyExtractor={(item) => item.Booking_id}
    data={booking} 
    renderItem={renderGridItem} 
    /></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:30
  },
  list1: {
    width: 395,
    height: 63,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  listname: {
    color: "#121212",
    height: 29,
    width: 143,
    fontSize: 17,
    marginTop: 6,
    marginLeft: 11
  },
  timeanddate: {
    color: "#121212",
    marginTop: 0,
    marginLeft: 11
  },
  button: {
    top: 0,
    left: 0,
    width: 96,
    height: 78,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  home: {
    top: 0,
    left: 3,
    width: 96,
    height: 78,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  buttonStack: {
    width: 99,
    height: 78,
    marginTop: 526,
    marginLeft: 6
  }
});

export default Mybookings;

import React, { useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text,FlatList, SafeAreaView } from "react-native";
import * as firebase from 'firebase';
import db from '../config';


const Mybookings = ({navigation}) =>{
  
  const renderGridItem = (itemData) =>{

    //converting timestamp from seconds to Standard Time
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
    const getDetail=()=>{
      navigation.navigate('BookingDetail',{
        details:{
          Booking_Time:convdataTime,
          category_name:itemData.item.category_name,
          BookingAddress: itemData.item.Address,
          slotTime:itemData.item.BookingTime,
          slotDate:itemData.item.Booking_Date,
          serviceprovidername:itemData.item.serviceprovider_name,
        }
      });
    }

    return <TouchableOpacity style={styles.list1} onPress={() => {
      getDetail();
    }}>
          <Text style={styles.listname}>{itemData.item.category_name}</Text>
          <Text style={styles.timeanddate}>{convdataTime}</Text>
        </TouchableOpacity>
  }

  const result = []
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState([]);
  const email=firebase.auth().currentUser.email;
  const getBooking = async () => {
    await db.collection("booking").doc(email).collection(email).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          result.push(doc.data());
      });
  });
  setBooking(result);
  setLoading(false);
  }

  useFocusEffect(()=>{
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
    marginLeft: 11,
    fontWeight:'bold',
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

import React, { useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Text,FlatList, SafeAreaView, View ,Image} from "react-native";
import * as firebase from 'firebase';
import db from '../config';


const PaymentHistory = () =>{
  
  const renderGridItem = (itemData) =>{

       return <TouchableOpacity style={styles.list1}>
          <Text style={styles.listname}>{itemData.item.serviceprovider_name}</Text>
          <Text style={styles.timeanddate}>{itemData.item.Booking_Date}</Text>
          <View style={styles.amountColumn}>
            <Text style={styles.amount}>Amount</Text>
            <View style={styles.imageRow}>
              <Image
                source={require("../assets/images/rupee-indian.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.text2}>{itemData.item.final_charge}</Text>
            </View>
          </View>
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
  amount: {
    color: "#121212"
  },
  image: {
    width: 12,
    height: 10,
    marginTop: 4
  },
  text2: {
    color: "#121212",
    marginLeft: 2
  },
  imageRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 2,
    marginRight: 10
  },
  amountColumn: {
    width: 55,
    marginLeft: 320,
    marginTop:-43
  },
});

export default PaymentHistory;

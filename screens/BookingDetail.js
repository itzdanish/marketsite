import React from "react";
import {   ScrollView, StyleSheet, View, Text,SafeAreaView } from "react-native";


function BookingDetail({route}) {

    const Booking_Time = route.params.details.Booking_Time;
    const category_name=route.params.details.category_name;
    const BookingAddress= route.params.details.BookingAddress;
    const slotTime=route.params.details.slotTime;
    const slotDate= route.params.details.slotDate;
    const serviceprovidername = route.params.details.serviceprovidername;
    
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.BookingDetailbox}>
        <View style={styles.bordersheet} >
        <Text style={styles.BookingDetail}>Booking Details</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.bookingAmount}>Booking Amount</Text>
        <Text style={styles.bookingAmountnum}>300</Text>
        <Text style={styles.bookingAmount}>Category Type</Text>
        <Text style={styles.bookingAmountnum}>{category_name}</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.dateTime}>Date &amp; Time</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.bookingTime}>Booking Time</Text>
        <Text style={styles.Date}>{Booking_Time}</Text>
        <Text style={styles.bookingTime}>Slot Date and Time</Text>
        <Text style={styles.Date}>{slotDate} between {slotTime}</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.clientDetails}>Provider Details</Text>
        </View>
        <View style={styles.bordersheet} >      
        <Text style={styles.Name}>Name</Text>
        <Text style={styles.NameDetail}>{serviceprovidername}</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.customerLocation}>Customer Location</Text>
        </View> 
        <View style={styles.bordersheet} >
        <Text style={styles.LocationArea}>{BookingAddress}</Text>
        </View> 
      </View>
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
      width:332,
      height:284,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },  
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    marginTop:20,
    marginLeft:25,
    width: 222,
    height: 48,
    backgroundColor: "rgba(196,196,196,0.4)",
     },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 18,
    fontWeight:'bold',

  },
  BookingDetailbox: {
    width: 393,
    height: 666,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  BookingDetail: {
    color: "#121212",
    height: 27,
    width: 370,
    fontSize: 18,
    marginTop: 3,
    marginLeft: 21,
    marginBottom:5,
    fontWeight:'bold',

  },
  bordersheet:{
    borderBottomColor:'#000000',
        borderBottomWidth:.8,
        marginBottom:10,
        },
  bookingAmount: {
    color: "#121212",
    height: 27,
    width: 150,
    fontSize: 18,
    marginTop: 5,
    marginLeft: 21,
    fontWeight:'bold',
  },
  bookingAmountnum: {
    color: "#121212",
    height: 27,
    width: 370,
    fontSize: 18,
    marginTop: 5,
    marginLeft: 21,    
    marginBottom:5,
  
  },
  dateTime: {
    color: "#121212",
    width: 150,
    height: 27,
    fontSize: 18,
    marginLeft: 21,
    fontWeight:'bold',
    marginBottom:5,
  },
  bookingTime: {
    color: "#121212",
    height: 27,
    width: 240,
    fontSize: 18,
    marginLeft: 21,
    marginBottom:5,
    fontWeight:'bold',
  },
  Date: {
    color: "#121212",
    width: 300,
    fontSize: 18,
    marginLeft: 23,
    marginBottom:5,
  },
  time: {
    color: "#121212",
    width: 120,
    fontSize: 18,
    marginLeft: 23,
    marginBottom:5,
  },
  clientDetails: {
    color: "#121212",
    height: 27,
    width: 130,
    fontSize: 18,
    marginLeft: 21,
    marginBottom:5,
    fontWeight:'bold',
  },
  Name: {
    color: "#121212",
    width: 229,
    fontSize: 18,
    marginLeft: 22,
    marginBottom:5,
    fontWeight:'bold',
  },
  NameDetail: {
    color: "#121212",
    width: 229,
    fontSize: 18,
    marginLeft: 22,
    marginBottom:10,
  },
  Category: {
    color: "#121212",
    width: 180,
    fontSize: 18,
    marginLeft: 23,
    marginBottom:5,
  },
  Categorytype:{
    color: "#121212",
    width: 180,
    fontSize: 18,
    marginLeft: 20,
    marginBottom:5,
  },
  customerLocation: {
    color: "#121212",
    width: 172,
    fontSize: 18,
    marginLeft: 21,
    fontWeight:'bold',
    marginBottom:5,
  },
  LocationArea: {
    color: "#121212",
    width: 180,
    fontSize: 18,
    marginLeft: 22,
    
  },
  LocationState: {
    color: "#121212",
    width: 180,
    fontSize: 18,
    marginLeft: 22,
    marginBottom:5,
  },
  marginbutton: {
    width: 170,
    height: 48,
    backgroundColor: "#C4C4C4",
    borderRadius: 100,
    marginTop: 133,
    marginLeft: 23,
  },
  marginbutton2: {
    width: 170,
    height: 48,
    backgroundColor: "#C4C4C4",
    borderRadius: 100,
    marginTop:-47,
    marginLeft: 210,
  },
  respond: {
    color: "#FFFFFF",
    fontWeight:'bold',
    width: 122,
    fontSize: 18,
    marginTop: 12,
    margin:30
  },
  respond1: {
    color: "#FFFFFF",
    fontWeight:'bold',
    width: 122,
    fontSize: 18,
    marginTop: 12,
    margin:50
  },
  respond2:{
    color: "#FFFFFF",
    fontWeight:'bold',
    height: 20,
    width: 102,
    fontSize: 16,
    marginLeft: 67
  }
});

export default BookingDetail;

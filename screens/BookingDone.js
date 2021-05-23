import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import * as firebase from 'firebase';
import db from "../config";

const Bookingdone=({route,navigation}) => {
  const reg = () => {
    navigation.navigate('Categories');
  }

  const category_name = route.params.details.category_name;
  const BookingTime = route.params.details.BookingTime;
  const Booking_Date = route.params.details.Booking_Date;
  const Serviceprovider_name = route.params.details.serviceprovider_name;

  return (
    <View style={styles.container}>
      <View style={styles.rect1Row}>
        <View style={styles.rect1}>
          <Text style={styles.applianceRepair}>{category_name}</Text>
          <Text style={styles.byPankajKumar}>By {Serviceprovider_name}</Text>
          <Text style={styles.timeanddate}>
            On {Booking_Date} Between {BookingTime}
          </Text>
          <Text style={styles.loremIpsum2}></Text>
          <Text style={styles.loremIpsum3}>
            300 Fixed Service Charge , additional faulty equipments charge will
            be applied later if any.
          </Text>
          <Text style={styles.loremIpsum4}>Thanks For Booking With Us!</Text>
        </View>
        <View style={styles.payAfterService1Stack}>
          <Text style={styles.payAfterService1}>
            Pay After Service (Cash/Online)
          </Text>
          <Text style={styles.payAfterService2}>
            Pay After Service (Cash/Online)
          </Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
      <MaterialButtonLight
          style={styles.materialButtonLight} click={reg}
        ><Text style={styles.caption}>Close</Text></MaterialButtonLight>
        <View style={styles.rect4}></View>
      </View>
      <Text style={styles.loremIpsum}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  rect1: {
    width: 395,
    height: 436,
    backgroundColor: "rgba(255,255,255,1)"
  },
  applianceRepair: {
    color: "#121212",
    fontSize: 16,
    marginTop: 27,
    marginLeft: 27
  },
  byPankajKumar: {
    color: "#121212",
    fontSize: 16,
    marginTop: 7,
    marginLeft: 27
  },
  timeanddate: {
    color: "#121212",
    marginTop: 10,
    marginLeft: 27
  },
  loremIpsum2: {
    color: "#121212",
    marginLeft: 27
  },
  loremIpsum3: {
    color: "#121212",
    height: 53,
    width: 341,
    fontSize: 16,
    marginTop: 23,
    marginLeft: 27
  },
  loremIpsum4: {
    color: "#121212",
    height: 50,
    width: 288,
    fontSize: 20,
    marginTop: 44,
    marginLeft: 58
  },
  payAfterService1: {
    top: 4,
    left: 0,
    position: "absolute",
    color: "#121212",
    height: 21,
    width: 308,
    lineHeight: 20,
    fontSize: 20
  },
  payAfterService2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    height: 21,
    width: 308,
    lineHeight: 20,
    fontSize: 20
  },
  payAfterService1Stack: {
    width: 308,
    height: 25,
    marginLeft: 63
  },
  rect1Row: {
    height: 436,
    flexDirection: "row",
    marginTop: 5,
    marginRight: -373
  },
  button: {
    width: 318,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 30,
    marginTop: 6
  },
  close: {
    color: "rgba(255,255,255,1)",
    height: 24,
    width: 115,
    fontSize: 20,
    marginTop: 12,
    marginLeft: 139
  },
  rect4: {
    width: 115,
    height: 30,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 30,
    marginLeft: 2411
  },
  buttonRow: {
    height: 55,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 37,
    marginRight: -2488
  },
  loremIpsum: {
    color: "#121212",
    marginTop: -510,
    marginLeft: 532
  },caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  },materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    marginTop: 20,
    marginLeft:40
  }
});

export default Bookingdone;

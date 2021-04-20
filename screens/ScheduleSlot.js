import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import MaterialButtonLight from "../components/MaterialButtonLight";
import { Picker } from '@react-native-picker/picker';
import * as firebase from 'firebase';
import db from '../config';
import cache from '../cache';

let booking_id;
const getNextFiveDay = () => {
  var today = new Date();
  const nextFiveDay = []
  for (let i = 0; i < 5; i++) {
    let day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i).toDateString().split(" ");
    nextFiveDay.push(day);
  }
  return nextFiveDay;
}

const Button = (props) => {
  const { setActiveButton, id, active, slot, fetch } = props;
  const clickHandler = () => {
    setActiveButton(id);
    fetch(slot);
  };

  var touchProps = {
    activeOpacity: 1,
    underlayColor: '#c4c4c4',   
    style: active ? styles.ts1Press : styles.ts1,       
  };

  return (
<TouchableOpacity {...touchProps} onPress={clickHandler}>
<Text style={styles.ts1text}>{slot[0]}{'\n'}{slot[2]}</Text>
</TouchableOpacity>
    // <button
    //   className={`btn ${
    //     active ? "btn-success" : null
    //   } btn-outline-secondary mb-1 form-control text-left`}
    //   value={value}
    //   onClick={clickHandler}
    // >
    //   {value}
    // </button>
  )
};

const nextFiveDay = getNextFiveDay();

const ScheduleSlot = ({ route, navigation }) => {
  const [activeButton, setActiveButton] = useState();


  const [addressValid, setAddressIsValid] = useState(false);
  const [addressValidationMsg, setAddressValidationMsg] = useState("");

  const [slot, setSlot] = useState();
  const [times, settimes] = useState();
  const [city, setCity] = useState();
  const [area, setArea] = useState();
  const [pincode, setPincode] = useState();
  const [user, setUser] = useState();
  const [address, setAddress] = useState(false);
  // const [Bookingid,setBookingid] = useState("");
  const categoryTitle = route.params.details.categoryTitle;
  const serviceprovider_email = route.params.details.serviceprovider_email;
  const serviceprovider_name = route.params.details.serviceprovider_name;
  var [isPress, setIsPress] = React.useState(false);


  const isaddressValid = text => {
    if (text.trim().length < 1) return false
    else return true
  }

  const fetch = (slot) => {
    setIsPress(true)
    var Day = slot[0];
    var Date = slot[2];
    var Month = slot[1];
    var Year = slot[3];
    const bookslot = Day + " " + Date + " " + Month + " " + Year;
    setSlot(bookslot);
  }

  const reg = async () => {
    if (!address) {
      if (!isaddressValid(address)) {
        setAddressIsValid(false);
        setAddressValidationMsg("Please enter a valid Charge");
      }
      else {
        setAddressValidationMsg("");
        setAddressIsValid(true);

      }

      Alert.alert("Check Input added")
    } else {
      try {
        const email = firebase.auth().currentUser.email;
        const docRef = await db.collection("booking").doc(email).collection(email).add({
          Booking_id: "",
          AddressData: {
            address: address,
            area: area,
            city: city,
            pincode: pincode,
          },
          BookingTime: times,
          Booking_Date: slot,
          Consumer_id: email,
          consumer_name: user,
          category_name: categoryTitle,
          Service_Provider_id: serviceprovider_email,
          serviceprovider_name: serviceprovider_name,
          service_id: "",
          date_time: firebase.firestore.Timestamp.fromDate(new Date()),
          is_completed: "",
          rejectionReason: "",
          rejected_by: "",
          rating: "",
          jobStatus: "",
          final_charge: "",
          review: "",
        });

        booking_id = docRef.id;
        await db.collection("booking").doc(email).collection(email).doc(booking_id).update({
          Booking_id: booking_id
        });



        db.collection("service").doc(serviceprovider_email).collection(serviceprovider_email).add({
          Booking_id: booking_id,
          Consumer_id: email,
          category_name: categoryTitle,
          Service_id: "",
          final_charge: "",
        })
          .then(function (doc) {
            var service_id = doc.id;
            db.collection("service").doc(serviceprovider_email).collection(serviceprovider_email).doc(service_id).update({
              Service_id: doc.id,

            })
          })

        navigation.navigate('BookingDone', {
          details: {
            BookingTime: times,
            Booking_Date: slot,
            category_name: categoryTitle,
            serviceprovider_email: serviceprovider_email,
            serviceprovider_name: serviceprovider_name,
          }
        });

      } catch (error) {
        var errorMessage = error.message;
        Alert.alert(errorMessage);
      }
    }
  };

  const getUser = async () => {
    const user = await cache.get('user');
    setUser(user.name)
  }
  getUser();


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }} >
      <View style={styles.screen}>
        <View style={{
          marginTop: 0,
          width: '100%',
          height: 229,
          backgroundColor: '#ffffff',
        }}>
          <Text style={styles.address}>Address</Text>
          <TextInput style={styles.addressinput} placeholder='Enter Address'
            onChangeText={text => setAddress(text)} />
          <TextInput style={styles.addressinput} placeholder='Area or location'
            onChangeText={text => setArea(text)} />
          <Picker style={{ marginLeft: 10, marginTop: 10 }} selectedValue={city} onValueChange={(itemValue, itemIndex) =>
            setCity(itemValue)}>
            <Picker.Item label="Select City" value="0" />
            <Picker.Item label="Mumbai" value="Mumbai" />
          </Picker>
          <TextInput style={styles.addressinput} placeholder='Enter Pincode'
            onChangeText={text => setPincode(text)} />
          {!addressValid && <Text style={{ marginLeft: 15, color: 'red' }}>{addressValidationMsg}</Text>}

        </View>
        <View style={{ marginTop: 5, paddingLeft: 15, height: 250, backgroundColor: '#ffffff', width: '100%', }}>
          <Text style={styles.Selectslot}>Select Slot</Text>

          <View style={styles.slots}>
            {
              nextFiveDay.map((slot, index) => {
                return (
                          <Button slot={slot} id={index} setActiveButton={setActiveButton} 
                          active={activeButton === index ? true : false} fetch={fetch} setSlot={setSlot}  />
                      );
              })
            }
          </View>
          <View>
            <Text style={styles.Selecttime}>Select Time</Text>
            <Picker style={styles.timeinput} selectedValue={times} onValueChange={(itemValue, itemIndex) =>
              settimes(itemValue)}>
              <Picker.Item label="Select Time" value="0" />
              <Picker.Item label="8-9 AM" value="8-9 AM" />
              <Picker.Item label="9-10 AM" value="9-10 AM" />
              <Picker.Item label="10-11 AM" value="10-11 AM" />
              <Picker.Item label="11-12 PM" value="11-12 PM" />
              <Picker.Item label="12-1 PM" value="12-1 PM" />
              <Picker.Item label="1-2 PM" value="1-2 PM" />
              <Picker.Item label="2-3 PM" value="2-3 PM" />
              <Picker.Item label="3-4 PM" value="3-4 PM" />
              <Picker.Item label="4-5 PM" value="4-5 PM" />
              <Picker.Item label="5-6 PM" value="5-6 PM" />
              <Picker.Item label="6-7 PM" value="6-7 PM" />
              <Picker.Item label="7-8 PM" value="7-8 PM" />
              <Picker.Item label="8-9 PM" value="8-9 PM" />
              <Picker.Item label="9-10 PM" value="9-10 PM" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MaterialButtonLight
            style={styles.materialButtonLight} click={reg}
          ><Text style={styles.caption}>Proceed to Pay</Text></MaterialButtonLight>

        </View>
      </View></TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    padding: 10,
    alignItems: 'baseline',
    backgroundColor: "#f0e0df",

  },
  header: {
    marginTop: 40,
    width: '100%',
    height: 42,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 7,
    borderBottomColor: '#000000',
    borderBottomWidth: .3,
    marginBottom: 10,
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",

  },
  address: {
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 15,
    fontWeight: "bold"
  },
  addressinput: {
    width: '90%',
    height: 40,
    fontSize: 18,
    borderBottomColor: '#000000',
    borderBottomWidth: .5,
    marginLeft: 15,
  },
  slots: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    paddingRight: 15,
  },
  materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    marginTop: -30,
    alignSelf: "center"
  },
  ts1: {
    width: 60, height: 65,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },
  ts1Press: {
    width: 60, height: 65,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    borderColor: '#C4C4C4',
    justifyContent: 'center',
  },
  ts1text: {
    textAlign: 'center',
    fontSize: 15,
    color: "#000000"

  },
  slotbutton: {
    width: 60, height: 65,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  Selectslot: {
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: "bold",
  },
  Selecttime: {
    fontSize: 20,
    padding: 2,
    fontWeight: "bold",
    marginTop: 10,
  },
  timeinput: {
    height: 50,
    fontSize: 15,
    marginLeft: 3,
    borderBottomColor: '#000000',
    borderBottomWidth: .5,
    width: '95%'
  },
  proceed: {
    height: 53,
    width: 316,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#C4C4C4",
  },
  proceedtext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 2,
    alignItems: 'center',
    paddingTop: 60,
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ScheduleSlot;
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { RadioButton } from 'react-native-paper';
import MaterialButtonLight from "../components/MaterialButtonLight";
import db from '../config';
import * as firebase from 'firebase';

function Rateandreview({route,navigation}) {

    const [checked, setChecked] = React.useState('');
    const [review,setReview]=useState('');
    const serviceprovidername = route.params.details.serviceprovidername;
    const Booking_id = route.params.details.Booking_id;
    const email=firebase.auth().currentUser.email;

    const rateReview = ()=>{
      
      db.collection("booking").doc(email).collection(email).doc(Booking_id).update({
        rating:checked,
        review:review,
      })
      Alert.alert("Thanks for your review");
      navigation.navigate('MyBookings')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        What do You think of {serviceprovidername} Service ?
      </Text>
      <View style={{marginLeft:30, marginTop:20}}>
      <RadioButton
        value="5"
        status={ checked === '5' ? 'checked' : '5' }
        onPress={() => setChecked('5')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Very Good</Text>
      <RadioButton
        value="4"
        status={ checked === '4' ? 'checked' : '4' }
        onPress={() => setChecked('4')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Good</Text>
      <RadioButton
        value="3"
        status={ checked === '3' ? 'checked' : '3' }
        onPress={() => setChecked('3')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Satisfactory</Text>
      <RadioButton
        value="2"
        status={ checked === '2' ? 'checked' : '2' }
        onPress={() => setChecked('2')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Bad</Text>
      <RadioButton
        value="1"
        status={ checked === '1' ? 'checked' : '1' }
        onPress={() => setChecked('1')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Very Bad</Text>
        </View>
      <Text style={styles.comment}>Any Comments</Text>
       <TextInput  style={styles.reviewinput} placeholder='Add here..'  multiline={true}
        numberOfLines={3}
        onChangeText={text => setReview(text)}/>
        <MaterialButtonLight
          style={styles.materialButtonLight} click={() => rateReview()}
        ><Text style={styles.caption}>Submit</Text></MaterialButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000000",
    opacity: 0.91
  },
  reviewinput:{
    top:20,
    left:20,
    width:200,
    height:40,
    fontSize:18,
    borderBottomColor:'white',
    borderBottomWidth:.5,
    marginLeft:15,
    borderTopColor:'red'
},
materialButtonLight: {
  height: 40,
  width: 248,
  borderRadius: 20,
  marginTop: 50,
  alignSelf: "center"
},
caption: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight:'bold',
},
    heading: {
    color: "#121212",
    width: 350,
    height: 54,
    fontSize: 20,
    marginTop: 32,
    marginLeft: 27,
    fontWeight:'bold'
  },comment:{
    marginTop:20,
    marginLeft:30,
    fontSize:18,
    fontWeight:'bold',
  }
});

export default Rateandreview;

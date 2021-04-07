import React, { useState } from "react";
import { TouchableOpacity, Image, ScrollView,Modal, StyleSheet, View, Text,SafeAreaView } from "react-native";
import { RadioButton } from 'react-native-paper';

function ServiceDetail(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = React.useState('first');

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.servicedetailbox}>
        <View style={styles.bordersheet} >
        <Text style={styles.serviceDetail}>Service Details</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.bookingAmount}>Booking Amount</Text>
        <Text style={styles.bookingAmountnum}>300</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.dateTime}>Date &amp; Time</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.bookingTime}>Booking Time</Text>
        <Text style={styles.Date}>11 DEC 2020</Text>
        <Text style={styles.time}>12:00 PM</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.clientDetails}>Client Details</Text>
        </View>
        <View style={styles.bordersheet} >      
        <Text style={styles.Name}>Name</Text>
        <Text style={styles.NameDetail}>Deepali Nikam</Text>
        
        <Text style={styles.Category}>Category</Text>
        <Text style={styles.Categorytype}> Appliance Repair</Text>
        </View>
        <View style={styles.bordersheet} >
        <Text style={styles.customerLocation}>Customer Location</Text>
        </View>        
        <View style={styles.bordersheet} >
        <Text style={styles.LocationArea}>Kalyan</Text>
        <Text style={styles.LocationState}>Maharashtra</Text></View>
        <Image style={{width:'80%',height:230,marginLeft:0,alignSelf:'center'}} source={require('../assets/images/map.png')} />
        <Image style={{marginLeft:285, marginTop:-45}} source={require('../assets/images/mapphoto.png')} />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{marginLeft:55}}>
            <Text style={styles.modalText}>Please tell us Your Reason</Text></View>
            <View>
            <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Customer Rescheduled</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Customer Cancelled</Text>
      <RadioButton
        value="third"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
      /><Text style={{marginLeft:50, marginTop:-27, marginBottom:7}}>Can't Deliver</Text>
      </View>
      <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.respond2}
              >Respond</Text>
        </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
      <View style={{marginBottom:15,width:'100%'}}> 
      <TouchableOpacity style={styles.marginbutton} onPress={() => setModalVisible(true)}>
          <Text style={styles.respond} >Update Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.marginbutton2} onPress={() => setModalVisible(true)}>
          <Text style={styles.respond1} >Start Job</Text>
        </TouchableOpacity></View>
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width:'100%',
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
  servicedetailbox: {
    width: '100%',
    height: 666,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  serviceDetail: {
    color: "#121212",
    height: 27,
    width: "90%",
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
  },
  bookingAmountnum: {
    color: "#121212",
    height: 27,
    width: '90%',
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
    width: 140,
    fontSize: 18,
    marginLeft: 21,
    marginBottom:5,
  },
  Date: {
    color: "#121212",
    width: 120,
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

export default ServiceDetail;

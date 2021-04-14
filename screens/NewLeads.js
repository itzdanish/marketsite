import React, { useState,useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, Image , FlatList} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import * as firebase from 'firebase';
import db from '../config';

const  NewLeads=({navigation})=> {

  const renderGridItem = (itemData) =>{
    
    return <TouchableOpacity style={styles.newleadslist} onPress={() => {
      navigation.navigate('ServiceDetail');
    }}>
  <View style={styles.leadnameRow}>
    <Text style={styles.leadname}>{itemData.item.Consumer_id}</Text>
    <Text style={styles.time}>{itemData.item.BookingTime}</Text>
  </View>
  <View style={styles.locationRow}>
    <Text style={styles.location}>{itemData.item.Address}</Text>
    <Text style={styles.date}>{itemData.item.Booking_Date}</Text>
  </View>
</TouchableOpacity>
  };

  const result = [];
  const finalresult = [];

  const [Service, setService] = useState([]);
  const [lead, setLead] = useState([]);
  const email=firebase.auth().currentUser.email;

  const getService = async () => {
    await db.collection("service").doc(email).collection(email).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          result.push(doc.data());
      });
  });  
  setService(result);

  Service.forEach(async item =>  {
    await db.collection("booking").doc(item.Consumer_id).collection(item.Consumer_id).doc(item.Booking_id).get().then((querySnapshot) => {
      finalresult.push(querySnapshot.data());
    });
    setLead(finalresult);  
  });

  }
  
  useEffect(()=>{
    getService();
  },[])
  
  return (
    <View style={styles.container}>
       <FlatList
    keyExtractor={(item) => item.Booking_id}
    data={lead} 
    renderItem={renderGridItem} style={{marginTop:30}}
    />
      <TouchableOpacity >
      <TouchableOpacity style={styles.ellipseStack} onPress={() => {
            navigation.navigate('postads');
          }}>
        <Svg viewBox="0 0 100 100" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/advertisement.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </TouchableOpacity>
        <Text style={{color:'#000000',fontWeight:'bold',fontSize:18,marginLeft:298}}>Post ads</Text>
      </TouchableOpacity>
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:0,
    width:"100%"
  },
  newleadslist: {
    width: 393,
    height: 82,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 0,
    width:"100%",
  },
  leadname: {
    color: "#121212",
    height: 27,
    fontSize: 18,
    width:175
  },
  time: {
    color: "#121212",
    height: 27,
    width: 75,
    fontSize: 18,
    marginLeft: 125,
    textAlign:'justify',
    justifyContent:'flex-end',
  },
  leadnameRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 21,
    marginRight: 41,
    width:'100%'
  },
  location: {
    color: "rgba(167,79,79,1)",
    height: 27,
    width: 196,
    fontSize: 18,
    marginTop: 1
  },
  date: {
    color: "#121212",
    height: 27,
    width: 90,
    fontSize: 18,
    marginLeft: 72
  },
  locationRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 21,
    marginRight: 26,
    width:'100%'
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  image: {
    top: 23,
    left: 23,
    width: 70,
    height: 69,
    position: "absolute"
  },
  ellipseStack: {
    width: 100,
    height: 100,
    marginTop: 440,
    marginLeft: 280
  }
});

export default NewLeads;

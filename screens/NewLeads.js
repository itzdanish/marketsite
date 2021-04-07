import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Ellipse } from "react-native-svg";

const  NewLeads=({navigation})=> {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.newleadslist} onPress={() => {
            navigation.navigate('ServiceDetail');
          }}>
        <View style={styles.leadnameRow}>
          <Text style={styles.leadname}>Deepali Nikam</Text>
          <Text style={styles.time}>12:00 PM</Text>
        </View>
        <View style={styles.locationRow}>
          <Text style={styles.location}>Kalyan,Maharashtra</Text>
          <Text style={styles.date}>FRI 11 DEC</Text>
        </View>
      </TouchableOpacity>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:0,
  },
  newleadslist: {
    width: 393,
    height: 82,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  leadname: {
    color: "#121212",
    height: 27,
    width: 131,
    fontSize: 18
  },
  time: {
    color: "#121212",
    height: 27,
    width: 75,
    fontSize: 18,
    marginLeft: 125
  },
  leadnameRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 21,
    marginRight: 41
  },
  location: {
    color: "rgba(167,79,79,1)",
    height: 27,
    width: 184,
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
    marginRight: 26
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

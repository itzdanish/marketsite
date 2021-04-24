import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function NotificationScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect8}>
        <Text style={styles.accountCreated}>Account Created</Text>
        <Text style={styles.text4}>Thu 12 Nov , 2020 at 08.00 pm</Text>
      </View>
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
    height: 63,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  appointmentFixed: {
    color: "#121212",
    fontSize: 17,
    marginTop: 12,
    marginLeft: 11
  },
  text: {
    color: "#121212",
    marginLeft: 11
  },
  rect6: {
    width: 395,
    height: 63,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -2
  },
  serviceCompleted: {
    color: "#121212",
    fontSize: 17,
    marginTop: 12,
    marginLeft: 13
  },
  text2: {
    color: "#121212",
    marginLeft: 13
  },
  rect7: {
    width: 395,
    height: 63,
    backgroundColor: "rgba(255,255,255,1)"
  },
  appointmentFixed1: {
    color: "#121212",
    fontSize: 17,
    marginTop: 11,
    marginLeft: 11
  },
  text3: {
    color: "#121212",
    marginLeft: 11
  },
  rect8: {
    width: 395,
    height: 63,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: -2
  },
  accountCreated: {
    color: "#121212",
    fontSize: 17,
    marginTop: 11,
    marginLeft: 13
  },
  text4: {
    color: "#121212",
    marginLeft: 13
  }
});

export default NotificationScreen;

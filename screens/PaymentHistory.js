import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function PaymentHistory(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.pankajKumarColumnRow}>
          <View style={styles.pankajKumarColumn}>
            <Text style={styles.pankajKumar}>Pankaj Kumar</Text>
            <Text style={styles.text}>Wed 10 Dec , 2020 at 2.00 pm</Text>
          </View>
          <View style={styles.amountColumn}>
            <Text style={styles.amount}>Amount</Text>
            <View style={styles.imageRow}>
              <Image
                source={require("../assets/images/rupee-indian.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.text2}>547</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    opacity: 0.97
  },
  rect1: {
    width: 395,
    height: 85,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  pankajKumar: {
    color: "#121212",
    fontSize: 17
  },
  text: {
    color: "#121212",
    marginTop: 8
  },
  pankajKumarColumn: {
    width: 185
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
    marginLeft: 120,
    marginBottom: 6
  },
  pankajKumarColumnRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 19,
    marginRight: 22
  }
});

export default PaymentHistory;

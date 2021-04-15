import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

function OngoingLeads({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listnames}>
        <View style={styles.deepaliNikamRow}>
          <Text style={styles.deepaliNikam}>Deepali Nikam</Text>
          <Text style={styles.loremIpsum}>12:00 PM</Text>
        </View>
        <View style={styles.kalyanMaharashtraRow}>
          <Text style={styles.kalyanMaharashtra}>Kalyan,Maharashtra</Text>
          <Text style={styles.fri11Dec}>FRI 11 DEC</Text>
        </View>
        <Text style={styles.jobEnded}>Job Ended</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:30
  },
  listnames: {
    width: 393,
    height: 120,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 5
  },
  deepaliNikam: {
    color: "#121212",
    height: 27,
    width: 131,
    fontSize: 18
  },
  loremIpsum: {
    color: "#121212",
    height: 27,
    width: 75,
    fontSize: 18,
    marginLeft: 125
  },
  deepaliNikamRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 21,
    marginRight: 41
  },
  kalyanMaharashtra: {
    color: "rgba(167,79,79,1)",
    height: 27,
    width: 184,
    fontSize: 18,
    marginTop: 1
  },
  fri11Dec: {
    color: "#121212",
    height: 27,
    width: 90,
    fontSize: 18,
    marginLeft: 72
  },
  kalyanMaharashtraRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 21,
    marginRight: 26
  },
  jobEnded: {
    color: "#121212",
    height: 30,
    width: 130,
    fontSize: 18,
    marginTop: 15,
    marginLeft: 21
  }
});

export default OngoingLeads;

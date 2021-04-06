import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import Svg, { Ellipse } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";

function providerreg({navigation}) {
    const reg = () => {
        navigation.navigate('NewLead');
      }
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.mainStack}>
        <View style={styles.main}>
          <TouchableOpacity style={styles.document}>
            <View style={styles.onboardingDocumentsColumnRow}>
              <View style={styles.onboardingDocumentsColumn}>
                <Text style={styles.onboardingDocuments}>
                  Onboarding Documents
                </Text>
                <Text style={styles.panCardAddressProof}>
                  Pan Card Address Proof
                </Text>
              </View>
              <Image
                source={require("../assets/images/next.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.certi}>
          <View style={styles.awardColumnRow}>
            <View style={styles.awardColumn}>
              <Text style={styles.award}>Awards and Certificates</Text>
              <Text style={styles.certificate}>
                Certification of Your profile for better reach
              </Text>
            </View>
            <Image
              source={require("../assets/images/next.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
        </TouchableOpacity>
        <View style={styles.guidelinebox}>
          <View style={styles.noteboxRow}>
            <View style={styles.notebox}>
              <Text style={styles.note}>Note</Text>
            </View>
            <Text style={styles.guidline}>
              Enter Proper Details and Documents. {"\n"}Based on the address
              proof there will be Background Verification and Skill Check for
              you before getting work.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.profileProgressColumnRow}>
        <View style={styles.profileProgressColumn}>
          <Text style={styles.profileProgress}>Profile Progress</Text>
          <Text style={styles.tell}>Complete Below Step to Join us</Text>
        </View>
        <View style={styles.ellipseStack}>
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
            source={require("../assets/images/plus.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.addPhoto}>Add Photo</Text>
        </View>
      </View>
      <MaterialButtonLight style={styles.materialButtonLight} click={reg}>
    <Text style={styles.caption}>Submit for Approval</Text></MaterialButtonLight>
    </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  main: {
    top: 0,
    width: 392,
    height: 608,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 0
  },
  materialButtonLight: {
    width: 223,
    height: 40,
    borderRadius: 20,
    marginTop: 525,
    marginLeft: 84,
  },
  document: {
    width: 391,
    height: 73,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 98,
    marginTop: 2,
    marginLeft: 1
  },
  onboardingDocuments: {
      width:300,
      fontWeight:'bold',
    color: "#121212",
    fontSize: 17
  },
  panCardAddressProof: {
    width:300,
    color: "#121212",
    fontSize: 17,
    marginTop: 4,
    marginLeft: 1
  },
  onboardingDocumentsColumn: {
    width: 181
  },
  image2: {
    width: 20,
    height: 20,
    marginLeft: 166,
    marginTop: 14
  },
  onboardingDocumentsColumnRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 14,
    marginRight: 10
  },
  certi: {
    top: 77,
    width: 391,
    height: 73,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 2
  },
  award: {
    color: "#121212",
    fontSize: 17,
    width:300,
    fontWeight:'bold',
  },
  certificate: {
    width:370,
    color: "#121212",
    fontSize: 17,
    marginTop: 8
  },
  awardColumn: {
    width: 323,
      
  },
  image3: {
    width: 20,
    height: 20,
    marginLeft: 22,
    marginTop: 21
  },
  awardColumnRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 11
  },
  guidelinebox: {
    top: 152,
    left: 2,
    width: 391,
    height: 102,
    position: "absolute",
    backgroundColor: "rgba(229,163,62,1)",
    flexDirection: "row"
  },
  notebox: {
    width: 60,
    height: 22,
    backgroundColor: "rgba(255,63,2,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop:27
  },
  note: {
    color: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 13
  },
  guidline: {
    color: "#121212",
    width: 277,
    height: 77,
    marginLeft: 23,
    fontWeight:'bold',
  },
  noteboxRow: {
    height: 77,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 26,
    marginTop: 11
  },
  mainStack: {
    width: 393,
    height: 608,
    marginTop: 150,
    marginLeft: -1
  },
  profileProgress: {
    color: "#121212",
    width: 221,
    fontSize: 30,
    fontWeight:'bold',
  },
  tell: {
    color: "#121212",
    height: 52,
    width: 244,
    fontSize: 21,
    marginTop: 5,
    marginLeft: 2
  },
  profileProgressColumn: {
    width: 246
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    position: "absolute",
    opacity: 0.74
  },
  image: {
    top: 10,
    left: 25,
    width: 20,
    height: 20,
    position: "absolute"
  },
  addPhoto: {
    top: 36,
    left: 7,
    position: "absolute",
    color: "#121212",
    fontSize: 12
  },
  ellipseStack: {
    width: 70,
    height: 70,
    marginLeft: 49,
    marginTop: 13
  },
  profileProgressColumnRow: {
    height: 146,
    flexDirection: "row",
    marginTop: -713,
    marginLeft: 11,
    marginRight: 17
  },caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default providerreg;

// import React from "react";
// import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
// import MaterialRadio1 from "../components/MaterialRadio1";
// import MaterialRadio2 from "../components/MaterialRadio2";
// import MaterialRadio3 from "../components/MaterialRadio3";
// import MaterialRadio4 from "../components/MaterialRadio4";
// import MaterialRadio5 from "../components/MaterialRadio5";

// function Rateandreview(props) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonRow}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.submit}>Submit</Text>
//         </TouchableOpacity>
//         <View style={styles.rect4}></View>
//       </View>
//       <Image
//         source={require("../assets/images/next.png")}
//         resizeMode="contain"
//         style={styles.image}
//       ></Image>
//       <View style={styles.loremIpsum2StackStackStackRow}>
//         <View style={styles.loremIpsum2StackStackStack}>
//           <View style={styles.loremIpsum2StackStack}>
//             <View style={styles.loremIpsum2Stack}>
//               <Text style={styles.loremIpsum2}></Text>
//               <View style={styles.materialRadio1Stack}>
//                 <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
//                 <MaterialRadio2 style={styles.materialRadio2}></MaterialRadio2>
//                 <MaterialRadio3 style={styles.materialRadio3}></MaterialRadio3>
//                 <MaterialRadio4 style={styles.materialRadio4}></MaterialRadio4>
//               </View>
//             </View>
//             <View style={styles.badStack}>
//               <Text style={styles.bad}>bad</Text>
//               <View style={styles.anyCommentsStack}>
//                 <Text style={styles.anyComments}>Any Comments</Text>
//                 <MaterialRadio5 style={styles.materialRadio5}></MaterialRadio5>
//               </View>
//             </View>
//             <Text style={styles.veryBad}>Very Bad</Text>
//           </View>
//           <Text style={styles.veryGood}>Very good</Text>
//           <Text style={styles.good}>Good</Text>
//           <Text style={styles.satisfactory}>Satisfactory</Text>
//         </View>
//         <Image
//           source={require("../assets/images/next.png")}
//           resizeMode="contain"
//           style={styles.image4}
//         ></Image>
//       </View>
//       <Text style={styles.loremIpsum}></Text>
//       <Text style={styles.text3}>
//         What do You think of Pankaj Kumar’s Service ?
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(238,238,238,0.89)",
//     borderWidth: 1,
//     borderColor: "#000000",
//     opacity: 0.91
//   },
//   loremIpsum4: {
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     height: 115,
//     width: 336,
//     opacity: 0.19,
//     marginTop: 415,
//     marginLeft: 29
//   },
//   button: {
//     width: 318,
//     height: 49,
//     backgroundColor: "rgba(155,155,155,1)",
//     borderRadius: 30,
//     marginTop: 6
//   },
//   submit: {
//     fontFamily: "roboto-regular",
//     color: "rgba(255,255,255,1)",
//     height: 26,
//     width: 80,
//     lineHeight: 14,
//     fontSize: 20,
//     marginTop: 11,
//     marginLeft: 125
//   },
//   rect4: {
//     width: 115,
//     height: 30,
//     backgroundColor: "rgba(196,196,196,1)",
//     borderRadius: 30,
//     marginLeft: 2411
//   },
//   buttonRow: {
//     height: 55,
//     flexDirection: "row",
//     marginTop: 22,
//     marginLeft: 37,
//     marginRight: -2488
//   },
//   image: {
//     width: 19,
//     height: 13,
//     marginTop: -491,
//     marginLeft: 520
//   },
//   loremIpsum2: {
//     top: 13,
//     left: 10,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212"
//   },
//   materialRadio1: {
//     height: 48,
//     width: 16,
//     position: "absolute",
//     left: 12,
//     top: 0
//   },
//   materialRadio2: {
//     height: 40,
//     width: 40,
//     position: "absolute",
//     left: 0,
//     top: 32
//   },
//   materialRadio3: {
//     height: 40,
//     width: 40,
//     position: "absolute",
//     left: 1,
//     top: 60
//   },
//   materialRadio4: {
//     height: 40,
//     width: 36,
//     position: "absolute",
//     left: 3,
//     top: 88
//   },
//   materialRadio1Stack: {
//     top: 0,
//     left: 0,
//     width: 41,
//     height: 128,
//     position: "absolute"
//   },
//   loremIpsum2Stack: {
//     top: 0,
//     left: 0,
//     width: 41,
//     height: 128,
//     position: "absolute"
//   },
//   bad: {
//     top: 5,
//     left: 48,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     fontSize: 18
//   },
//   anyComments: {
//     top: 91,
//     left: 0,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212"
//   },
//   materialRadio5: {
//     height: 96,
//     width: 15,
//     position: "absolute",
//     left: 0,
//     top: 0
//   },
//   anyCommentsStack: {
//     top: 0,
//     left: 0,
//     width: 95,
//     height: 108,
//     position: "absolute"
//   },
//   badStack: {
//     top: 92,
//     left: 13,
//     width: 95,
//     height: 108,
//     position: "absolute"
//   },
//   veryBad: {
//     top: 126,
//     left: 60,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     fontSize: 18
//   },
//   loremIpsum2StackStack: {
//     top: 0,
//     left: 0,
//     width: 131,
//     height: 200,
//     position: "absolute"
//   },
//   veryGood: {
//     top: 12,
//     left: 60,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     fontSize: 18
//   },
//   good: {
//     top: 42,
//     left: 60,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     fontSize: 18
//   },
//   satisfactory: {
//     top: 70,
//     left: 60,
//     position: "absolute",
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     fontSize: 18
//   },
//   loremIpsum2StackStackStack: {
//     width: 156,
//     height: 200
//   },
//   image4: {
//     width: 57,
//     height: 15,
//     marginLeft: 911,
//     marginTop: 176
//   },
//   loremIpsum2StackStackStackRow: {
//     height: 200,
//     flexDirection: "row",
//     marginTop: 59,
//     marginLeft: 17,
//     marginRight: -748
//   },
//   loremIpsum: {
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     marginTop: -291,
//     marginLeft: 532
//   },
//   text3: {
//     fontFamily: "roboto-regular",
//     color: "#121212",
//     width: 350,
//     height: 54,
//     fontSize: 20,
//     marginTop: 32,
//     marginLeft: 27
//   }
// });

// export default Rateandreview;

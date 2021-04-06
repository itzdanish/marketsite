import React from "react";
import { StyleSheet, View, Text, Image,TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const  Chatwindow = props =>  {
  return (
    <View style={styles.container}>
      
      <View style={styles.chatheader}>
        <View style={styles.profilepicRow}>
          <Image
            source={require("../assets/images/user.png")}
            resizeMode="contain"
            style={styles.profilepic}
          ></Image>
          <View style={styles.receivernameColumn}>
            <Text style={styles.receivername}>Pankaj Kumar</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </View>
      </View>
      <ScrollView>
      <Text style={styles.chatday}>Today</Text>
      <View style={styles.msg1}>
        <Text style={styles.msg1text}>Hey</Text>
      </View>
      <View style={styles.msg2Row}>
        <View style={styles.msg2}>
          <Text style={styles.msg2text}>Hello sir, how can i help you?</Text>
        </View>
        <Text style={styles.msgtime2}>7.30 pm</Text>
      </View>
      <View style={styles.msg3Stack}>
        <View style={styles.msg3}></View>
        <Text style={styles.msg3text}>
          hi pankaj actually i think there is some problem with my geyser, the
          hot water is not coming from it.
        </Text>
      </View>
      <View style={styles.msg4}>
        <Text style={styles.msg4text}>
          Okay, sir there must be a problem with your geyser circuit breaker
        </Text>
      </View>
      <View style={styles.msg5}>
        <Text style={styles.msg5text}>
          i think it is tripped , you can book slot as per your time i will get
          it done
        </Text>
      </View>
      <View style={styles.msg6}>
        <Text style={styles.msg6text}>
          yes i am booking tommorow’s slot at 9.00 am
        </Text>
      </View>
      <View style={styles.msg7Stack}>
        <View style={styles.msg7}></View>
        <Text style={styles.msg7text}>
          okay sir ,i will be there at 9.00 am sharp
        </Text>
      </View>
      <View style={styles.msg8}>
        <Text style={styles.msg8text}>yeah</Text>
      </View></ScrollView>
      <Text style={styles.msgtime}>7.30 pm</Text>
      <Text style={styles.msgtime3}>7.30 pm</Text>
      <Text style={styles.msgtime5}>7.30 pm</Text>
      <Text style={styles.msgtime6}>7.30 pm</Text>
      <Text style={styles.msgtime7}>7.35 pm</Text>
      
      <View style={styles.msginput}>
        <TextInput style={{width:'100%',height:63,marginLeft:15}} placeholder="Type message here">
          </TextInput>
      </View>
      <TouchableOpacity>
          <Image
          style={styles.sendbutton}
            source={require("../assets/images/send.png")}b
            resizeMode="contain"
          ></Image></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  msginput: {
    width: 395,
    height: 63,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 668,
    position:"absolute"
  },
  inputplaceholder: {
    color: "#121212",
    marginTop: 6,
    paddingLeft:40,
    paddingTop:5,
    position:'absolute',
  },
  sendbutton: {
    width: 47,
    height: 29,
    marginLeft:340,
    marginTop:0
  },
  inputplaceholderRow: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 48,
    marginTop: 27
  },
  chatheader: {
    width: '100%',
    height: 56,
    backgroundColor: "rgba(227,218,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 2,
  },
  profilepic: {
    width: 38,
    height: 48,
    marginTop:2,
  },
  receivername: {
    color: "#121212",
    width:300,
    paddingLeft:3,    
    fontWeight: "bold",
    fontSize:14,
  },
  status: {
    color: "#121212",
    fontSize: 14,
    paddingLeft:3,
  },
  receivernameColumn: {
    width: 87,
    marginLeft: 6,
    marginTop: 6,
    marginBottom: 7
  },
  profilepicRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 241
  },
  chatday: {
    color: "#121212",
    marginTop: 11,
    marginLeft: 177
  },
  msg1: {
    width: 78,
    height: 35,
    backgroundColor: "rgba(227,218,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 18,
    marginLeft: 299
  },
  msg1text: {
    color: "#121212",
    marginTop: 13,
    marginLeft: 15
  },
  msg2: {
    width: 187,
    height: 35,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5,
    flexDirection: "row",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,top:4,
  },
  msg2text: {
    color: "#121212",
    marginLeft: 4,
    marginTop: 6
  },
  msgtime2: {
    color: "#121212",
    marginLeft: 134,
    marginTop: 26
  },
  msg2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 9,
    marginRight: 14
  },
  msg3: {
    top: 0,
    left: 0,
    width: 227,
    height: 70,
    position: "absolute",
    backgroundColor: "rgba(227,218,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 0
  },
  msg3text: {
    top: 9,
    left: 11,
    position: "absolute",
    color: "#121212",
    fontSize: 14,
    width: 218,
    height: 49
  },
  msg3Stack: {
    width: 229,
    height: 68,
    marginTop: 7,
    marginLeft: 152
  },
  msg4: {
    width: 222,
    height: 50,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5,
    flexDirection: "row",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    marginTop: 29,
    marginLeft: 9,top:5,
  },
  msg4text: {
    color: "#121212",
    width: 209,
    height: 36,
    marginLeft: 6,
    marginTop: 7
  },
  msg5: {
    width: 247,
    height: 55,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5,
    flexDirection: "row",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    marginTop: 8,
    marginLeft: 9
  },
  msg5text: {
    color: "#121212",
    width: 233,
    height: 36,
    opacity: 0.5,
    marginLeft: 7,
    marginTop: 10
  },
  msg6: {
    width: 212,
    height: 55,
    backgroundColor: "rgba(227,218,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 32,
    marginLeft: 165,top:2,
  },
  msg6text: {
    color: "#121212",
    width: 190,
    height: 31,
    marginTop: 13,
    marginLeft: 9
  },
  msg7: {
    left: 0,
    width: 198,
    height: 55,
    position: "absolute",
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 5,
    flexDirection: "row",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    top: 9
  },
  msg7text: {
    top: 18,
    left: 8,
    position: "absolute",
    color: "#121212",
    width: 198,
    height: 36
  },
  msg7Stack: {
    width: 206,
    height: 55,
    marginTop: 17,
    marginLeft: 9
  },
  msg8: {
    width: 78,
    height: 35,
    backgroundColor: "rgba(227,218,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 22,
    marginLeft: 298
  },
  msg8text: {
    color: "#121212",
    marginTop: 9,
    marginLeft: 14
  },
  msgtime: {
    color: "#121212",
    marginTop: -493,
    marginLeft: 9
  },
  msgtime3: {
    color: "#121212",
    marginTop: 130,
    marginLeft: 9
  },
  msgtime5: {
    color: "#121212",
    marginTop: 124,
    marginLeft: 328
  },
  msgtime6: {
    color: "#121212",
    marginTop: 59,
    marginLeft: 8
  },
  msgtime7: {
    color: "#121212",
    marginTop: 55,
    marginLeft: 330
  }
});

export default Chatwindow;

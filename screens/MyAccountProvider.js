import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal ,SafeAreaView} from "react-native";
import MaterialButtonLight from "../components/MaterialButtonLight";
import cache from '../cache';
import * as firebase from 'firebase';
import db from '../config';


const CustomModal = ({title, modalVisible, onClose, Content}) => {
  
  return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={onClose}>
          <View style={{marginLeft:-20,borderBottomColor:'#000000',
        borderBottomWidth:.3,
        marginBottom:5,}}>
          <Image style={{width:10,height:10, marginLeft:280,marginTop:-8}}
            source={require("../assets/images/cancel.png")}
            resizeMode="contain"
          ></Image>
            <Text style={styles.modalText}>{title}</Text></View></TouchableOpacity>
              <Content />
          </View>
        </View>
      </Modal>
  );
}

const EarningContent = () => {
  const [earning, setEarning] = useState("");
  const email=firebase.auth().currentUser.email;
  const loadEarning = async () => {
    var docRef = db.collection("serviceprovider").doc(email);
      docRef.get().then((doc) => {
    setEarning(doc.data());
  })}

  useEffect(()=> {
      loadEarning();
  }, [])
  return(
  <View>
    <Image style={{width:40,height:38, marginTop:10}}
    source={require("../assets/images/rupee-indian.png")}
    resizeMode="contain"
  ></Image>
    <Text style={{fontSize:54,marginLeft:38, marginTop:-57, marginBottom:7}}>{earning.earnings}</Text>
<Text style={{marginLeft:8, marginTop:-15,color:'#E21F1F',marginBottom:7, fontSize:20}}>Earned Till Now</Text>
</View>
);
}

const RatingContent = () => {
  const result=[];
    const email=firebase.auth().currentUser.email;
  const [ratingCount, setRatingsCount] = useState([]);
const [sum,setSum]= useState(0)
const[length,setLength] = useState(0)
 const starImgFilled =  require('../assets/images/star_filled.png');


 const loadRating=()=>{
 
    db.collection("service").doc(email).collection(email).get().then((querySnapshot) => {
      
      querySnapshot.forEach((doc) => {       
          result.push(doc.data().rating);
      });
        setRatingsCount(result);
        const arraylength = result.length;
        setLength(arraylength);
          //adding array element
 
          const add = result.reduce(function(a, b){
             return  a + b;  
         }, 0);
         setSum(add)
  });

}

const ratingFinal=[]
const finalsum = sum/length;
for (let i = 0; i < finalsum; i++) {
ratingFinal.push(i)
}

useEffect(()=>{
  loadRating()
},[])
  
  
const CustomRatingBar =()=>{
  return(
    <View style={{flexDirection:'row'}}>
      {
        ratingFinal.map((item)=>{
            return(
              <Image key={item} style={{width:30,height:32,marginTop:20,marginLeft:8}} size={12} source={starImgFilled}/>
            )
        })
      }
    </View>
  )
}
 
  return(
  <View>
    <CustomRatingBar />
      <Text style={{marginLeft:8, marginTop:5,color:'#E21F1F',marginBottom:7, fontSize:20}}>Based on {length} ratings</Text>
      </View>
  );
  
}



const MyAccountProviderScreen = ({navigation}) => {

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [phoneno, setPhoneno] = useState();
  const [image,setImage]= useState();

  const logout = () => {
    firebase.auth().signOut().then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
    });
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);


  const getUser = async () => {
    const user = await cache.get('user');
    setUser(user.name);
    setEmail(user.email);
    setPhoneno(user.phoneno);
    setImage(user.image)
  }
  getUser();


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profiledetail}>
        <View style={styles.profilepicRow}>
          <Image
            source={{uri:image}}
            resizeMode="contain"
            style={styles.profilepic}
          ></Image>
          <View style={styles.profilenameColumn}>
            <Text style={styles.profilename}>{user}</Text>
            <Text style={styles.emailandphone}>
            {email}
              {"\n"}
              {phoneno}
            </Text>
          </View>
          <Text style={styles.editbutton}>Edit</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationtab}  onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.earningstabnameRow}>
          <Text style={styles.earningstabname}>Earnings</Text>
          <Image
            source={require("../assets/images/next.png")}
            resizeMode="contain"
            style={styles.earningsnext}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ratingsHistorytab}  onPress={() => setModalVisible2(!modalVisible2)}>
        <View style={styles.ratingsHistorytabnameRow}>
          <Text style={styles.ratingsHistorytabname}>Ratings</Text>
          <Image
            source={require("../assets/images/next.png")}
            resizeMode="contain"
            style={styles.ratingsHistorytabhistorynext}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.changePasswordTab} onPress={() => {
        navigation.navigate('ChangePassword');
      }}>
        <View style={styles.changePasswordtabnameRow}>
          <Text style={styles.changePasswordtabname}>Change Password</Text>
          <Image
            source={require("../assets/images/next.png")}
            resizeMode="contain"
            style={styles.changepasswordnext}
          ></Image>
        </View>
      </TouchableOpacity>
      <MaterialButtonLight
          style={styles.materialButtonLight} click={logout}
        ><Text style={styles.caption}>Logout</Text></MaterialButtonLight>

        <CustomModal Content={EarningContent} title={"Your Earning"} modalVisible={modalVisible} onClose={() => setModalVisible(!modalVisible)}/>
        <CustomModal Content={RatingContent} title={"Your Rating"} modalVisible={modalVisible2} onClose={() => setModalVisible2(!modalVisible2)}/>
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop:30,
  },
  materialButtonLight: {
    height: 40,
    width: 248,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center"
  },
  profiledetail: {
    width: '100%',
    height: 100,
    backgroundColor: "rgba(196,196,196,1)",
    marginTop: 5,
  },
  profilepic: {
    width: 58,
    height: 58, borderRadius:80
  },
  profilename: {
    color: '#000000',
    fontSize: 20,
    marginTop:-10,
    fontWeight:'bold',
  },
  emailandphone: {
    color: "#121212",
    lineHeight: 17,
    width:300,
    marginTop: 3,
  },
  profilenameColumn: {
    width: 175,
    marginLeft: 17,
    marginTop: 7,
    marginBottom: 1
  },
  editbutton: {
    color: "rgba(83,104,193,1)",
    marginLeft: 65,
    marginTop: 1
  },
  profilepicRow: {
    height: 58,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 26,
    marginRight: 14
  },
  notificationtab: {
    width: '100%',
    height: 66,
    backgroundColor: "rgba(230,230,230,0.14)",
    flexDirection: "row",
  },
  earningstabname: {
    color: "#121212",
    lineHeight: 17,
    marginTop: 6,
    fontWeight:'bold',
  },
  earningsnext: {
    width: 19,
    height: 15,
    marginLeft: 290
  },
  earningstabnameRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 20,
    marginTop: 18
  },
  ratingsHistorytab: {
    width: '100%',
    height: 66,
    backgroundColor: "rgba(230,230,230,0.15)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
    flexDirection: "row",
    marginLeft: 0
  },
  ratingsHistorytabname: {
    color: "#121212",
    lineHeight: 17,
    fontWeight:'bold',
  },
  ratingsHistorytabhistorynext: {
    width: 19,
    height: 15,
    marginLeft: 295
  },
  ratingsHistorytabnameRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 20,
    marginTop: 25,
    fontWeight:'bold',
  },
  changePasswordTab: {
    width: '100%',
    height: 66,
    backgroundColor: "rgba(230,230,230,0.24)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.24)",
    flexDirection: "row",
  },
  changePasswordtabname: {
    color: "#121212",
    lineHeight: 17,
    fontWeight:'bold',
  },
  changepasswordnext: {
    width: 19,
    height: 15,
    marginLeft: 225
  },
  changePasswordtabnameRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 20,
    marginTop: 25
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
      width:332,
      height:190,
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
  }, modalText: {
    marginBottom: 10,
    fontWeight:'bold',
    width:300,
    textAlign:'center',
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight:'bold',
  }
});

export default MyAccountProviderScreen;

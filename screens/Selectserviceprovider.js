import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {CATEGORIES} from '../Data/dummy-data';
import db from '../config';

const Selectserviceprovider = ({route,navigation}) => {

  const renderListing = itemData =>{
    return (   
    <View style={styles.container}>
      <TouchableOpacity style={styles.ads} onPress={() => {
        navigation.navigate('ScheduleSlot',{
          details:{
            categoryTitle:selectedCategory.title,
            serviceprovider_email:itemData.item.email,
            serviceprovider_name:itemData.item.name,
          }
        });
      }}>
        <View style={styles.imageRow}>
          <View>
          <Image
          source={{uri:itemData.item.image}}
          resizeMode="contain"
          style={styles.image}
          ></Image>
          </View>
          <View style={styles.adpersonnameStack}>
            <Text style={styles.adpersonname}>{itemData.item.name}</Text>
            <CustomRatingBar/>
          </View>
          <Text style={styles.servicecount}>{itemData.item.service_Done} Service Done</Text>
        </View>
        <View style={styles.phnnoColumnRow}>
          <View style={styles.phnnoColumn}>
            <Text style={styles.phnno}>{itemData.item.phoneno}</Text>
            <View style={styles.fixchargeStack}>
              <Text style={styles.fixcharge}>{itemData.item.fixedcharge} Per Service</Text>
              <Image
                source={require("../assets/images/rupee-indian.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </View>
          </View>
        </View>
      </TouchableOpacity>
     </View>     
      );
    
  }

  const result = [];
const [listing, setListing] = useState([]);
const [rating, setRating] = useState(3);
const [maxRating,setmaxrating] = useState([1,2,3,4,5]);

 const starImgFilled =  require('../assets/images/star_filled.png');
 const starImgCorner =  require('../assets/images/star_corner.png');

const CustomRatingBar =()=>{
  return(
    <View style={{flexDirection:'row'}}>
      {
        maxRating.map((item)=>{
            return(
              <Image key={item} style={styles.image2} source={item = rating ? starImgCorner : starImgFilled}/>
            )
        })
      }
    </View>
  )
}

  const getListing = async () => {
     await db.collection("serviceprovider").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          result.push(doc.data());
      });
      
  });
  setListing(result);
  }

  useEffect(() => {
    getListing();
  },[]);

  const CategoryId = route.params.CategoryId;
  
  const selectedCategory = CATEGORIES.find(cat => cat.title === CategoryId);
 
   const displayProvider = listing.filter(list => list.category_type.indexOf(CategoryId) >= 0);
  return (
    <View style={styles.container}>
      <FlatList data={displayProvider} keyExtractor={(item, index) => item.serviceprovider_id} renderItem={renderListing}>   
      </FlatList>      
      <Text style={styles.listtitle}>Showing {selectedCategory.title} Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(234,218,218,1)",
    backgroundColor: "rgba(238,238,238,1)",
    width:'100%',
  },
  listtitle:{
    padding:15,
    textAlign:'center',
    color:'#6b7370',
  },
  ads: {
    width: '100%',
    height: 137,
    backgroundColor: "rgba(255,255,255,0.58)",
    marginTop: 5,
    marginLeft: 5
  },
  image: {
    width: 39,
    height: 45,marginTop:20

  },
  adpersonname: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    fontSize: 20,
  },
  image2: {
    top: 32,
    left: 0,
    width:25,
    height:25,
  },
  adpersonnameStack: {
    width: 200,
    height: 56,
    marginLeft: 15,
    marginTop: 7
  },
  servicecount: {
    color: "rgba(164,187,139,1)",
    marginLeft: 255,
    marginTop: 37,
    position:'absolute'
  },
  imageRow: {
    height: 63,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 5,
    marginRight: 12
  },
  phnno: {
    color: "#121212",
    fontSize: 15
  },
  fixcharge: {
    top: 0,
    left: 14,
    position: "absolute",
    color: "#121212",
    fontSize: 15
  },
  image3: {
    top: 2,
    left: 0,
    width: 15,
    height: 13,
    position: "absolute"
  },
  fixchargeStack: {
    width: 118,
    height: 18,
    marginTop: 7
  },
  phnnoColumn: {
    width: 118,
    marginTop: 4
  },
  chatbutton: {
    width: 108,
    height: 38,
    backgroundColor: "rgba(196,196,196,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 30,
    marginLeft: 180,
    position:'absolute',
  },
  chat: {
    color: "rgba(255,255,255,1)",
    alignItems: "center",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 34
  },
  phnnoColumnRow: {
    height: 47,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 59,
    marginRight: 5
  }
});

export default Selectserviceprovider;
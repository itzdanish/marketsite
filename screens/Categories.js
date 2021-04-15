import React from "react";
import { StyleSheet, View, FlatList,Text, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {CATEGORIES} from '../Data/dummy-data';
import cache from '../cache';
import { SafeAreaView } from "react-native-safe-area-context";



const Categories = ({navigation}) =>{

  const renderGridItem =(itemData) => {
    return <SafeAreaView style={styles.container}><TouchableOpacity style={styles.gridItem} onPress={() => {
      navigation.navigate('SelectServiceProvider',{
        CategoryId: itemData.item.title
      }
    );
    }}><SafeAreaView>
      <ImageBackground source={itemData.item.path} style={styles.imagesetting}></ImageBackground>
      <Text style={styles.categorytitle}>{itemData.item.title}</Text>
      </SafeAreaView></TouchableOpacity></SafeAreaView>
      
  }

  return (
    <FlatList 
    keyExtractor={(item, index) => item.id}
    data={CATEGORIES} 
    renderItem={renderGridItem} 
    numColumns={3} style={{marginTop:30}}/>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(234,218,218,1)",
    backgroundColor: "rgba(238,238,238,1)",
    width:'100%',
  },
  gridItem:{
    flex:1,
    margin:15,
    width: 98,
    height: 140,
  },
  categorytitle:{
    paddingTop:15,
    textAlign:'center',
    fontSize:18,
  },
  imagesetting:{
    height:53,
    width:54,
    marginLeft:28,
  },
});

export default Categories;

import React from "react";
import { StyleSheet, View, FlatList,Text, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {CATEGORIES} from '../Data/dummy-data';

const postads = ({navigation}) =>{

  const renderGridItem =(itemData) => {
    return <TouchableOpacity style={styles.gridItem} onPress={() => {
      navigation.navigate('Tellus',{
        CategoryId: itemData.item.title
      }
    );
    }}><View>
      <ImageBackground source={itemData.item.path} style={styles.imagesetting}></ImageBackground>
      <Text style={styles.categorytitle}>{itemData.item.title}</Text>
      </View></TouchableOpacity>
  }

  return (
    <FlatList 
    keyExtractor={(item, index) => item.id}
    data={CATEGORIES} 
    renderItem={renderGridItem} 
    />
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
    width: 382,
    height: 73,
    backgroundColor: '#FFFFFF',
  },
  categorytitle:{
    marginTop:-30,
    textAlign:'left',
    fontSize:18,
    marginLeft:90,
  },
  imagesetting:{
    marginTop:20,
    height:39,
    width:36,
    marginLeft:28,
    
  },
});

export default postads;

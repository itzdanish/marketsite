import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {AuthNavigator} from './Navigator/AuthNavigator';


export default function App() {

  return (
    <NavigationContainer>
     <AuthNavigator/> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

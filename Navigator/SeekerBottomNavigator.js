import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import MyBookingsScreen from '../screens/MyBookingsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import ChatScreen from '../screens/ChatScreen';

import cache from '../cache';
import { get } from 'lodash';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor:'yellow',
    style:{
        height:50,

    }}}>
      <Tab.Screen name="Home" component={Categories} options={{tabBarLabel:(tabInfo)=>{
            return<View>
                <Text style={{fontSize:12,textAlign:'center',}}>Categories</Text>
            </View>
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="grid-outline"  size={32} color="black"></Ionicons>
        ),
      }}/>
      <Tab.Screen name="ChatScreen" component={ChatScreen} options={{
        tabBarLabel:(tabInfo)=>{
          return<View>
              <Text style={{fontSize:12,textAlign:'center',}}>Chat</Text>
          </View>
      },tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="chat-processing-outline" size={32} color="black" />
        ),
      }}/>
      <Tab.Screen name="MyBookings" component={MyBookingsScreen} options={{
        tabBarLabel:(tabInfo)=>{
            return<View>
                <Text style={{fontSize:12,textAlign:'center',width:120}}>Bookings</Text>
            </View>
        },tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="clipboard-list-outline" size={32} color="black" />
        ),
    }}/>
      <Tab.Screen name="MyAccount" component={MyAccountScreen} options={{
        tabBarLabel:(tabInfo)=>{
            return<View>
                <Text style={{fontSize:12,textAlign:'center'}}>Account</Text>
            </View>
        },tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle-outline" size={32} color="black" />
        )
        }} />
    </Tab.Navigator>
  );
}

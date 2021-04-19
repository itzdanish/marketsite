import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NewLeads from '../screens/NewLeads';
import OngoingLeads from '../screens/OngoingLeads';
import MyAccountProvider from '../screens/MyAccountProvider';

const Tab1 = createBottomTabNavigator();

export function MyProviderTabs  (){
  return (
    <Tab1.Navigator tabBarOptions={{activeTintColor:'yellow',
    style:{
        height:50,
    }
    }}>
      <Tab1.Screen name="NewLead" component={NewLeads} options={{tabBarLabel:(tabInfo)=>{
            return<View>
                <Text style={{fontSize:12,textAlign:'center',}}>New Leads</Text>
            </View>
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="podium-outline" size={32} color="black" />
        ),
      }}/>
      <Tab1.Screen name="OngoingLeads" component={OngoingLeads} options={{
        tabBarLabel:(tabInfo)=>{
            return<View>
                <Text style={{fontSize:12,textAlign:'center',marginLeft:-10,width:120}}>Ongoing Leads</Text>
            </View>
        },tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-outline" size={32} color="black" />
        ),
    }}/>
      <Tab1.Screen name="MyAccount" component={MyAccountProvider} options={{
        tabBarLabel:(tabInfo)=>{
            return<View>
                <Text style={{fontSize:12,textAlign:'center'}}>Account</Text>
            </View>
        },tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle-outline" size={32} color="black" />
        )
        }} />
    </Tab1.Navigator>
  );
}

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectServiceProvider from '../screens/Selectserviceprovider';
import ScheduleSlot from '../screens/ScheduleSlot';
import BookingDone from '../screens/BookingDone';
import Chatwindow from '../screens/Chatwindow';
import postads from '../screens/postads';
//import Rateandreview from '../screens/Rateandreview';
import ChangePassword from '../screens/ChangePassword';
import PaymentHistory from '../screens/PaymentHistory';
import  {MyTabs} from '../Navigator/SeekerBottomNavigator';
import NotificationScreen from '../screens/NotificationScreen';

const ServiceSeekerStack = createStackNavigator();

export function ServiceSeekerStackScreen (){
   return(
    <ServiceSeekerStack.Navigator>
      <ServiceSeekerStack.Screen options={{headerShown:false}}
     name="Categories" component={MyTabs}/>
    <ServiceSeekerStack.Screen options={{title:'Select Service Provider',headerTitleAlign:'center'}}
     name="SelectServiceProvider" component={SelectServiceProvider}/>
    <ServiceSeekerStack.Screen options={{title:'ScheduleSlot',headerTitleAlign:'center'}}
      name="ScheduleSlot" component={ScheduleSlot}/>
    <ServiceSeekerStack.Screen options={{title:'ScheduleSlot',headerTitleAlign:'center'}} 
    name="BookingDone" component={BookingDone}/>
    <ServiceSeekerStack.Screen options={{title:'Booking Done',headerTitleAlign:'center'}} 
    name="Chatwindow" component={Chatwindow}/>
    <ServiceSeekerStack.Screen options={{title:'Post Ads',headerTitleAlign:'center'}}
    name="postads" component={postads}/>
          <ServiceSeekerStack.Screen options={{title:'Notifications',headerTitleAlign:'center'}} 
      name="NotificationScreen" component={NotificationScreen}/>
      <ServiceSeekerStack.Screen options={{title:'Payment History',headerTitleAlign:'center'}}
      name="PaymentHistory" component={PaymentHistory}/>
    <ServiceSeekerStack.Screen options={{title:'Change Password',headerTitleAlign:'center'}}
     name="ChangePassword" component={ChangePassword}/>
  </ServiceSeekerStack.Navigator>
   )
  }


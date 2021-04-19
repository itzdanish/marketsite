import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectServiceProvider from '../screens/Selectserviceprovider';
import ScheduleSlot from '../screens/ScheduleSlot';
import BookingDone from '../screens/BookingDone';
import postads from '../screens/postads';
import Rateandreview from '../screens/Rateandreview';
import ChangePassword from '../screens/ChangePassword';
import PaymentHistory from '../screens/PaymentHistory';
import  {MyTabs} from '../Navigator/SeekerBottomNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import BookingDetail from '../screens/BookingDetail';
import ServiceSeekerreg from '../screens/ServiceSeekerreg';

const ServiceSeekerStack2 = createStackNavigator();

export function ServiceSeekerStack2Screen (){
   return(
    <ServiceSeekerStack2.Navigator>
         <ServiceSeekerStack2.Screen options={{headerShown:false}}
      name="ServiceSeekerreg" component={ServiceSeekerreg}/>  
      <ServiceSeekerStack2.Screen options={{headerShown:false}}
     name="Categories" component={MyTabs}/>
    <ServiceSeekerStack2.Screen options={{title:'Select Service Provider',headerTitleAlign:'center'}}
     name="SelectServiceProvider" component={SelectServiceProvider}/>
    <ServiceSeekerStack2.Screen options={{title:'ScheduleSlot',headerTitleAlign:'center'}}
      name="ScheduleSlot" component={ScheduleSlot}/>
    <ServiceSeekerStack2.Screen options={{title:'BookingDone',headerTitleAlign:'center'}} 
    name="BookingDone" component={BookingDone}/>
    <ServiceSeekerStack2.Screen options={{title:'Post Ads',headerTitleAlign:'center'}}
    name="postads" component={postads}/>
          <ServiceSeekerStack2.Screen options={{title:'Notifications',headerTitleAlign:'center'}} 
      name="NotificationScreen" component={NotificationScreen}/>
      <ServiceSeekerStack2.Screen options={{title:'Payment History',headerTitleAlign:'center'}}
      name="PaymentHistory" component={PaymentHistory}/>
    <ServiceSeekerStack2.Screen options={{title:'Change Password',headerTitleAlign:'center'}}
     name="ChangePassword" component={ChangePassword}/>     
    <ServiceSeekerStack2.Screen options={{title:'Booking Detail',headerTitleAlign:'center'}}
     name="BookingDetail" component={BookingDetail}/>
     <ServiceSeekerStack.Screen options={{title:'Rate Service',headerTitleAlign:'center'}}
     name="Rateandreview" component={Rateandreview}/>
  </ServiceSeekerStack2.Navigator>
   )
  }


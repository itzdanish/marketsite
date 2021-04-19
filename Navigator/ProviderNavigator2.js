import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import postads from '../screens/postads';
import ChangePassword from '../screens/ChangePassword';
import ServiceProviderreg from '../screens/ServiceProviderreg';
import ServiceDetail from '../screens/ServiceDetail';
import Tellus from '../screens/Tellus';
import providerreg from '../screens/providerreg';
import OngoingDetail from '../screens/OngoingDetail';
import MyAccountProvider from '../screens/MyAccountProvider';
import  {MyProviderTabs} from '../Navigator/ProviderBottomNavigator';
const ServiceProviderStack2 = createStackNavigator();

export function ServiceProviderStack2Screen (){
     return(
        <ServiceProviderStack2.Navigator initialRouteName="ServiceProviderreg">  
          <ServiceProviderStack2.Screen options={{headerShown:false}}
      name="NewLead" component={MyProviderTabs}/>   
                <ServiceProviderStack2.Screen options={{headerShown:false}}
      name="ServiceProviderreg" component={ServiceProviderreg}/>                  
          <ServiceProviderStack2.Screen options={{headerShown:false}}
      name="providerreg" component={providerreg}/>
        <ServiceProviderStack2.Screen options={{title:'Select Your Service',headerTitleAlign:'center'}}
         name="postads" component={postads}/>   
      <ServiceProviderStack2.Screen options={{title:'Change Password',headerTitleAlign:'center'}} 
      name="ChangePassword" component={ChangePassword}/>
      <ServiceProviderStack2.Screen options={{title:'Service Detail',headerTitleAlign:'center'}}
      name="ServiceDetail" component={ServiceDetail}/>
      <ServiceProviderStack2.Screen options={{title:'Enter Details',headerTitleAlign:'center'}}
      name="Tellus" component={Tellus}/>
      <ServiceProviderStack.Screen options={{title:'Ongoing Details',headerTitleAlign:'center'}}
      name="OngoingDetail" component={OngoingDetail}/>
      <ServiceProviderStack2.Screen options={{title:'MyAccount Provider',headerTitleAlign:'center'}}
      name="MyAccountProvider" component={MyAccountProvider}/>
    </ServiceProviderStack2.Navigator>
    )
  }


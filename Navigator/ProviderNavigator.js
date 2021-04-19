import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import postads from '../screens/postads';
import ChangePassword from '../screens/ChangePassword';
import ServiceProviderreg from '../screens/ServiceProviderreg';
import ServiceDetail from '../screens/ServiceDetail';
import Tellus from '../screens/Tellus';
import providerreg from '../screens/providerreg';
import MyAccountProvider from '../screens/MyAccountProvider';
import OngoingDetail from '../screens/OngoingDetail';
import  {MyProviderTabs} from '../Navigator/ProviderBottomNavigator';
const ServiceProviderStack = createStackNavigator();

export function ServiceProviderStackScreen (){
     return(
        <ServiceProviderStack.Navigator initialRouteName="NewLead">  
          <ServiceProviderStack.Screen options={{headerShown:false}}
      name="NewLead" component={MyProviderTabs}/>   
                <ServiceProviderStack.Screen options={{headerShown:false}}
      name="ServiceProviderreg" component={ServiceProviderreg}/>                  
          <ServiceProviderStack.Screen options={{headerShown:false}}
      name="providerreg" component={providerreg}/>
        <ServiceProviderStack.Screen options={{title:'Select Your Service',headerTitleAlign:'center'}}
         name="postads" component={postads}/>     
      <ServiceProviderStack.Screen options={{title:'Change Password',headerTitleAlign:'center'}} 
      name="ChangePassword" component={ChangePassword}/>
      <ServiceProviderStack.Screen options={{title:'Service Detail',headerTitleAlign:'center'}}
      name="ServiceDetail" component={ServiceDetail}/>
      <ServiceProviderStack.Screen options={{title:'Enter Details',headerTitleAlign:'center'}}
      name="Tellus" component={Tellus}/>
      <ServiceProviderStack.Screen options={{title:'Ongoing Details',headerTitleAlign:'center'}}
      name="OngoingDetail" component={OngoingDetail}/>
      <ServiceProviderStack.Screen options={{title:'MyAccount Provider',headerTitleAlign:'center'}}
      name="MyAccountProvider" component={MyAccountProvider}/>
    </ServiceProviderStack.Navigator>
    )
  }


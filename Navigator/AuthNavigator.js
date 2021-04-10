import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import Changepassword from '../screens/ChangePassword';
import {ServiceProviderStackScreen} from '../Navigator/ProviderNavigator';
import {ServiceSeekerStackScreen} from '../Navigator/SeekerNavigator';
import {ServiceProviderStack2Screen} from '../Navigator/ProviderNavigator2'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Changepassword" component={Changepassword} />
      <Stack.Screen options={{headerShown:false}} name="NewLead" component={ServiceProviderStackScreen} />
      <Stack.Screen options={{headerShown:false}} name="ServiceProviderreg" component={ServiceProviderStack2Screen} />
      <Stack.Screen options={{headerShown:false}} name="Categories" component={ServiceSeekerStackScreen} />
    </Stack.Navigator>
  );
}

export function AuthNavigator() {
  return (
      <MyStack />
  );
}

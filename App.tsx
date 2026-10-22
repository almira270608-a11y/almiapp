import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen';
import OTPScreen from './src/components/OTPScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';
import RegisterScreen from './src/components/RegisterScreen';
import SelectCityScreen from './src/components/SelectCityScreen';
import BookingScreen from './src/components/BookingScreen';
import MyBookingsScreen from './src/components/MyBookingsScreen';
import RestaurantMenuScreen from './src/components/RestaurantMenuScreen';
import BookingSuccessScreen from './src/components/BookingSuccessScreen';

// Навигация типін анықтау (Бұл қателерді жояды)
export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  OTPScreen: undefined;
  ResetPassword: undefined;
  Register: undefined;
  SelectCity: undefined;
  Booking: undefined;
  BookingSuccess: {
    bookingDetails?: {
      date: string;
      time: string;
      guests: string;
      wishes: string;
    };
  } | undefined;
  MyBookings: undefined;
  RestaurantMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SelectCity" component={SelectCityScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
        <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
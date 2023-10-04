import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashbord from '../Screens/Dashbord';
import Profile from '../Screens/Profile';
import Findtrains from '../Screens/Findtrains';
import TrainList from '../Screens/TrainList';
import TicketBook from '../Screens/TicketBook';
import DownloadTicket from '../Screens/DownloadTicket';
const Stack = createStackNavigator();
const Auth = Props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Findtrains">
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Findtrains"
          component={Findtrains}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TicketBook"
          component={TicketBook}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="TrainList"
          component={TrainList}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="DownloadTicket"
          component={DownloadTicket}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;

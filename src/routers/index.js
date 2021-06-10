import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../containers/Auth/SignIn';
import Registration from '../containers/Auth/Registration';
import colors from '../utils/colors/colors';
import ChatScreen from '../containers/screens/ChatScreen';
import ListFriend from '../containers/screens/ListFriend';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../containers/screens/Profile';
import MyProfile from '../containers/screens/MyProfile';
import { NewFeed } from '../containers/screens/NewFeed';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: {
          fontSize: 13,
          justifyContent: 'center',
          fontWeight: 'bold',
          paddingBottom: 5,
        },
        activeTintColor: colors.sand,
        inactiveTintColor: 'gray',
        style: {height: 50},
      }}>
      <Tab.Screen
        name="Home"
        component={ChatScreen}
        options={{
          tabBarLabel: 'ChatScreen',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chat" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="NewFeed"
        component={NewFeed}
        options={{
          tabBarLabel: 'NewFeed',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chat" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="ListFriend"
        component={ListFriend}
        options={{
          tabBarLabel: 'ListFriend',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Router;

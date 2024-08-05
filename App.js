import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import ScreenA1 from './Screens-Home/StackA/ScreenA1';
import ScreenA2 from './Screens-Home/StackA/ScreenA2';
import ScreenB1 from './Screens-Chat/StackB/ScreenB1';
import ScreenB2 from './Screens-Chat/StackB/ScreenB2';
import ScreenC1 from './Screens-Buscar/StackC/ScreenC1';
import ScreenC2 from './Screens-Buscar/StackC/ScreenC2';
import ScreenD1 from './Screens-Perfil/StackD/ScreenD1';
import ScreenD2 from './Screens-Perfil/StackD/ScreenD2';

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="StackA" 
        component={StackANavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="StackB" 
        component={StackBNavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="StackC" 
        component={StackCNavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="StackD" 
        component={StackDNavigator} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
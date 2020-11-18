import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TopTabRouters from './src/TopTabRouters/TopTabRouters';
import Tab2 from './src/Tabs/Tab2';
import Tab3 from './src/Tabs/Tab3';
import Tab4 from './src/Tabs/Tab4';
import Tab5 from './src/Tabs/Tab5';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName = 'Tab1' tabBarOptions = {{
        activeTintColor:'#ff2400', inactiveTintColor:'#808080'
      }} >
        <Tab.Screen children = {TopTabRouters} name = 'Tab1' options = {{
          tabBarIcon :  ({ color }) => <Icon size={20} name='home' color={color} style={{ marginTop: 10 }} />,
          title : ''
        }} />
        <Tab.Screen component = {Tab2} name = 'Tab2' options = {{
          tabBarIcon :  ({ color }) => <Icon size={20} name='microsoft' color={color} style={{ marginTop: 10 }} />,
          title : ''
        }} />
        <Tab.Screen component = {Tab3} name = 'Tab3' options = {{
          tabBarIcon :  ({ color }) => <MeterialIcons size={20} name='shopping-cart' color={color} style={{ marginTop: 10 }} />,
          title : ''
        }} />
        <Tab.Screen component = {Tab4} name = 'Tab4' options = {{
          tabBarIcon :  ({ color }) => <Icon size={20} name='heart' color={color} style={{ marginTop: 10 }} />,
          title : ''
        }} />
        <Tab.Screen component = {Tab5} name = 'Tab5' options = {{
          tabBarIcon :  ({ color }) => <FontAwesome size={20} name='user' color={color} style={{ marginTop: 10 }} />,
          title : ''
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
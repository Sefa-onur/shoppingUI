import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopTab1 from '../TopTabs.js/TopTab1';
import TopTab2 from '../TopTabs.js/TopTab2';
import TopTab3 from '../TopTabs.js/TopTab3';
import TopTab4 from '../TopTabs.js/TopTab4';
import TopTab5 from '../TopTabs.js/TopTab5';


const TopTab = createMaterialTopTabNavigator();

const TopTabRouters = () => {
  return(
      <TopTab.Navigator tabBarOptions = {{
        labelStyle :{fontSize:12, fontWeight:'bold'},
        activeTintColor:'#ff2400',
        inactiveTintColor:'black',
        scrollEnabled:true 
      }} >
          <TopTab.Screen name = 'TopTab1' component = {TopTab1} options = {{tabBarLabel:'All'}} />
          <TopTab.Screen name = 'TopTab2' component = {TopTab2} options = {{tabBarLabel:'Clothing'}} />
          <TopTab.Screen name = 'TopTab3' component = {TopTab3} options = {{tabBarLabel:'Shoes'}} />
          <TopTab.Screen name = 'TopTab4' component = {TopTab4} options = {{tabBarLabel:'Accessories'}} />
          <TopTab.Screen name = 'TopTab5' component = {TopTab5} options = {{tabBarLabel:'Brands'}} />
      </TopTab.Navigator>
  )
}

export default TopTabRouters;
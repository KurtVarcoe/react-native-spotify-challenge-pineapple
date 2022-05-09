import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Module from './Module';
import User from './User';
import TrackList from './TrackList';
import Header from './Header';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Module/>
        <User/>
        <TrackList/>
      </SafeAreaView>
    );
}

export default TabBar = () => {
  return (
    <Tab.Navigator 
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#282828',
          position: 'absolute',
          borderTopWidth: 0,
        },
      tabBarLabelPosition: "below-icon",
      tabBarActiveTintColor: "white",
    })}>
        <Tab.Screen name="Ikhaya" component={HomeScreen} options={{tabBarIcon: ({focused, color, size}) => {
          const focusColor = focused ? "white" : "#a6a6a6"
          return <Icon name="home-outline" size={25} color={focusColor}/>
        }, tabBarLabelStyle: {fontSize: 12}}}/>
        <Tab.Screen name="Sesha" component={HomeScreen} options={{tabBarIcon: ({focused, color, size}) => {
          const focusColor = focused ? "white" : "#a6a6a6"
          return <Icon name="search" size={25} color={focusColor}/>
        }, tabBarLabelStyle: {fontSize: 12}}}/>
        <Tab.Screen name="Umtapo Wakho" component={HomeScreen} options={{tabBarIcon: ({focused, color, size}) => {
          const focusColor = focused ? "white" : "#a6a6a6"
          return <Icon name="library" size={25} color={focusColor}/>
        }, tabBarLabelStyle: {fontSize: 12}}}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1
  }
});
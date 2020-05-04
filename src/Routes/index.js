import React from 'react';
import Recipes from '../screens/Recipes';
import Friends from '../screens/Friends';
import AddRecipes from '../screens/AddRecipe';
import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Header from '../screens/Header';
import Profile from '../screens/Profile';
import SideMenu from '../screens/SideMenu';
import Settings from '../screens/Settings';

export const stackNav = createStackNavigator({
  Recipes: {
    screen: Recipes,
    navigationOptions: ({navigation}) => ({
      title: 'Recipes',
      header: () => <Header navigation={navigation} />,
      headerStyle: {paddingRight: 10, paddingLeft: 15},
    }),
  },
  AddRecipe: {
    screen: AddRecipes,
    navigationOptions: ({navigation}) => ({
      title: 'AddRecipes',
      header: () => <Header navigation={navigation} />,
      headerStyle: {paddingRight: 10, paddingLeft: 15},
    }),
  },
  Friends: {
    screen: Friends,
    navigationOptions: ({navigation}) => ({
      title: 'Friends',
      header: () => <Header navigation={navigation} />,
      headerStyle: {paddingRight: 10, paddingLeft: 15},
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
      header: () => <Header navigation={navigation} />,
      headerStyle: {paddingRight: 10, paddingLeft: 15},
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      header: () => <Header navigation={navigation} />,
      headerStyle: {paddingRight: 10, paddingLeft: 15},
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    Item1: {
      screen: stackNav,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
    drawerLockMode: 'unlocked',
  },
);

export const Root = createAppContainer(Drawer);

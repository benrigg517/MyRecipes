import * as React from 'react';
import {NavigationActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

export const goBack = navigation => {
  navigation.dispatch(NavigationActions.back());
};
export const openDrawer = navigation => {
  navigation.dispatch(DrawerActions.openDrawer());
};
export const closeDrawer = navigation => {
  navigation.dispatch(DrawerActions.closeDrawer());
};
export const getCurrentLocation = navigation => {
  return navigation.state.routeName;
};

export function navigate(name, params, navigation) {
  // Perform navigation if the app has mounted
  navigation.navigate(name, params);
}

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <IconButton
          icon="keyboard-backspace"
          onPress={() => this.props.navigation.closeDrawer()}
          size={30}
        />
        <ScrollView>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('Recipes')}>
              Recipes
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('Friends')}>
              Friends
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('Profile')}>
              Profile
            </Text>
          </View>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('Settings')}>
              Settings
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.navItemStyle}>Log Out</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object,
};

export default SideMenu;

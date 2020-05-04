import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';
import {AppColours} from '../../Styles/colour';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import {getCurrentLocation} from '../../Utils/navigator';
import HelpButton from '../../Components/HelpButton';

const Header = props => {
  const location = getCurrentLocation(props.navigation);
  const [helperText, setHelperText] = useState('');
  const editList = ['Profile', 'Recipes', 'Friends'];
  const addList = ['Recipes', 'Friends'];
  const deleteList = ['Friends'];

  useEffect(() => {
    switch (location) {
      case 'Recipes':
        setHelperText(
          "Here is where you will find all the recipes you've added, if you can't see any go ahead and click the plus button to add one!",
        );
        break;
      case 'Profile':
        setHelperText('This your profile, let everyone know who you are!');
        break;
      case 'Friends':
        setHelperText(
          "This is where you can find all the friends you've added, can't see any click the plus button to add one!",
        );
        break;
      case 'Settings':
        setHelperText('Customise your app settings here!');
        break;
      case 'AddRecipe':
        setHelperText('Add a new recipe to share with the world!');
        break;
    }
  }, [location]);
  const onAdd = () => {
    switch (location) {
      case 'Recipes':
        props.navigation.navigate('AddRecipe');
      case 'Friends':
    }
  };

  const onEdit = () => {
    switch (location) {
      case 'Recipes':

      case 'Profile':

      case 'Friends':
    }
  };

  const onDelete = () => {
    switch (location) {
      case 'Recipes':

      case 'Friends':
    }
  };

  return (
    <Appbar style={{backgroundColor: AppColours.primaryColour}}>
      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={{paddingLeft: 10}}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      <Appbar.Content title="My Recipes" />
      <Appbar.Header style={{backgroundColor: AppColours.primaryColour}}>
        {addList.some(item => item === location) && (
          <View>
            <Appbar.Action icon="plus" onPress={() => onAdd()} />
          </View>
        )}
        {editList.some(item => item === location) && (
          <View>
            <Appbar.Action
              icon="pencil"
              onPress={() => console.log('Pressed archive')}
            />
          </View>
        )}
        {deleteList.some(item => item === location) && (
          <View>
            <Appbar.Action
              icon="delete"
              onPress={() => console.log('Pressed delete')}
            />
          </View>
        )}
        <HelpButton text={helperText} />
      </Appbar.Header>
    </Appbar>
  );
};

export default Header;

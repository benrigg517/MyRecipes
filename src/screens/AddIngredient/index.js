import React, {useState} from 'react';
import {
  Modal,
  Button,
  Portal,
  Searchbar,
  Card,
  Paragraph,
  Title,
  Avatar,
} from 'react-native-paper';
import {View, Text} from 'react-native';
import {AppColours} from '../../Styles/colour';
import {useSelector} from 'react-redux';
import NewIngredient from '../NewIngredient';

const LeftContent = props => <Avatar.Icon {...props} icon="food" />;

const AddIngredient = props => {
  const ingredientList = useSelector(state => state.ingredients);
  const [search, changeSearch] = useState('');
  const [newIngredients, setNewIngredients] = useState(false);

  const [searchResults, setSearchResults] = useState(
    ingredientList.ingredients,
  );

  const filterIngredients = value => {
    changeSearch(value);
    let newResults = [];
    for (let i = 0; ingredientList[i]; i++) {
      if (ingredientList[i].name.includes(value)) {
        newResults.push(ingredientList[i]);
      }
    }
    setSearchResults(newResults);
  };

  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={() => props.setVisible(false)}
        contentContainerStyle={{
          backgroundColor: AppColours.secondaryColour,
          height: '100%',
          width: '100%',
          alignSelf: 'center',
          borderWidth: 1,
        }}>
        <View style={{flex: 1}}>
          <Searchbar
            placeholder="Search"
            onChangeText={text => filterIngredients(text)}
            value={search}
          />
          <View style={{padding: 5}}>
            <Button
              icon="plus"
              mode="contained"
              color={AppColours.primaryColour}
              style={{width: '60%', alignSelf: 'center', padding: 5}}
              onPress={() => setNewIngredients(true)}>
              New Ingredient
            </Button>
          </View>
          <NewIngredient
            visible={newIngredients}
            setVisible={setNewIngredients}
          />
          {searchResults.map(item => {
            console.log(item);
            return (
              <Card>
                <Card.Title title={item.name} />
              </Card>
            );
          })}
        </View>
      </Modal>
    </Portal>
  );
};

export default AddIngredient;

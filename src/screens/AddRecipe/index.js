import React, {useState} from 'react';
import {View, Text, Platform, ViewText} from 'react-native';
import {TextInput, Button, List} from 'react-native-paper';
import Timer from '../../Components/Timer';
import TimeInput from '../../Components/TimeInput';
import TextInputMask from 'react-native-text-input-mask';
import {useSelector} from 'react-redux';
import {AppColours} from '../../Styles/colour';
import AddIngredient from '../AddIngredient';
import {addIngredient} from '../../store/reducer/Recipe/actions';

const AddRecipes = () => {
  const recipe = useSelector(state => state.recipe);
  const [name, setName] = useState(recipe.name);
  const [description, setDescription] = useState(recipe.description);
  const [prepTime, setPrepTime] = useState(recipe.prepTime);
  const [cookTime, setCookTime] = useState(recipe.cookTime);
  const [price, setPrice] = useState(recipe.totalCost);
  const [viewIngredients, setViewIngredients] = useState(false);
  const [addIngredients, setAddIngredients] = useState(false);

  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        label="Description"
        placeholder={'Enter a description of your recipe here'}
        value={description}
        multiline={true}
        onChangeText={text => setDescription(text)}
        style={{height: 200}}
      />
      <TimeInput
        timeHook={{value: prepTime, changeValue: setPrepTime}}
        label="Prep Time"
      />
      <TimeInput
        timeHook={{value: cookTime, changeValue: setCookTime}}
        label="Cook Time"
      />
      <View style={{paddingTop: 10, paddingLeft: 10}}>
        <Text style={{fontSize: 20}}>Total Price: {price}</Text>
      </View>
      <List.Accordion
        title="Ingredients"
        left={props => <List.Icon {...props} icon="food" />}
        expanded={viewIngredients}
        onPress={() => setViewIngredients(!viewIngredients)}>
        {recipe.ingredients.map(item => {
          return (
            <View>
              <List.Item title={item.name} />
            </View>
          );
        })}
      </List.Accordion>
      <Button
        icon="plus"
        mode="contained"
        color={AppColours.primaryColour}
        style={{width: '60%', alignSelf: 'center'}}
        onPress={() => setAddIngredients(true)}>
        Add Ingredient
      </Button>
      <AddIngredient visible={addIngredients} setVisible={setAddIngredients} />
    </View>
  );
};

export default AddRecipes;

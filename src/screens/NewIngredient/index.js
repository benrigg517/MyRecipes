import React, {useState, useEffect} from 'react';
import {
  Modal,
  Button,
  Portal,
  Divider,
  Menu,
  TextInput,
} from 'react-native-paper';
import {View, Text, ScrollView} from 'react-native';
import {AppColours} from '../../Styles/colour';
import {useSelector, useDispatch} from 'react-redux';
import {addNewIngredient} from '../../store/reducer/Ingredients/actions';

const LeftContent = props => <Avatar.Icon {...props} icon="food" />;

const NewIngredient = props => {
  const dispatch = useDispatch();
  const ingredientList = useSelector(state => state.ingredientList);
  const [menuVisible, setMenuVisible] = useState(false);
  const [measurementMenuVisible, setMeasurementMenuVisible] = useState(false);
  const [cost, setCost] = useState('');
  const [ingredient, setIngredient] = useState({
    type: '',
    cost: 0,
    name: '',
    unit: '',
  });

  useEffect(() => {
    if (cost.length > 0) {
      setIngredient({
        type: ingredient.type,
        cost: parseFloat(cost),
        name: ingredient.name,
        unit: ingredient.unit,
      });
      console.log(ingredient);
    } else if (ingredient.cost.toString() === 'NaN') {
      setIngredient({
        type: ingredient.type,
        cost: 0,
        name: ingredient.name,
        unit: ingredient.unit,
      });
      cost = '';
    }
  }, [ingredient.cost]);

  const types = [
    'Select Type',
    'Vegetable',
    'Fruit',
    'Carbohydrate',
    'Meat',
    'Dairy',
    'Sweet',
  ];

  const mesurementMethods = ['Unit', 'kg', 'g', 'ml', 'L', 'item'];

  const onSave = () => {
    dispatch(addNewIngredient(ingredient));
    props.setVisible(false);
  };

  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={() => props.setVisible(false)}
        contentContainerStyle={{
          backgroundColor: AppColours.secondaryColour,
          height: '40%',
          minHeight: 300,
          width: '80%',
          alignSelf: 'center',
          borderWidth: 1,
        }}>
        <ScrollView>
          <View style={{flex: 1}}>
            <TextInput
              label="Name"
              style={{backgroundColor: AppColours.secondaryColour}}
              value={ingredient.name}
              onChangeText={text =>
                setIngredient({
                  type: ingredient.type,
                  cost: ingredient.cost,
                  name: text,
                  unit: ingredient.unit,
                })
              }
            />
            <View
              style={{
                paddingTop: 10,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                  ingredient.type.length > 0 ? (
                    <Button onPress={() => setMenuVisible(true)}>
                      <Text style={{color: 'black'}}>
                        Type: {ingredient.type}
                      </Text>
                    </Button>
                  ) : (
                    <Button onPress={() => setMenuVisible(true)}>
                      <Text style={{color: 'black'}}>Select Type</Text>
                    </Button>
                  )
                }>
                {types.map(item => {
                  return (
                    <Menu.Item
                      key={item}
                      onPress={() => {
                        item !== 'Select Type'
                          ? setIngredient({
                              type: item,
                              cost: ingredient.cost,
                              name: ingredient.name,
                              unit: ingredient.unit,
                            })
                          : setIngredient({
                              type: '',
                              cost: ingredient.cost,
                              name: ingredient.name,
                              unit: ingredient.unit,
                            });
                        setMenuVisible(false);
                      }}
                      title={item}
                      titleStyle={{fontSize: 15}}
                    />
                  );
                })}
              </Menu>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                label="Cost"
                value={'£' + cost}
                onChangeText={text => {
                  setCost(text.slice(1));
                }}
                style={{
                  width: '50%',
                  backgroundColor: AppColours.secondaryColour,
                }}
              />
              <View style={{left: 15, top: 30, width: '15%'}}>
                <Text>per</Text>
              </View>
              <View
                style={{
                  paddingTop: 22,
                  backgroundColor: AppColours.secondaryColour,
                }}>
                <Menu
                  visible={measurementMenuVisible}
                  onDismiss={() => setMeasurementMenuVisible(false)}
                  anchor={
                    ingredient.unit.length > 0 ? (
                      <Button onPress={() => setMeasurementMenuVisible(true)}>
                        <Text style={{color: 'black'}}>{ingredient.unit}</Text>
                      </Button>
                    ) : (
                      <Button onPress={() => setMeasurementMenuVisible(true)}>
                        <Text style={{color: 'black'}}>Unit</Text>
                      </Button>
                    )
                  }>
                  {mesurementMethods.map(item => {
                    return (
                      <Menu.Item
                        key={item}
                        onPress={() => {
                          item !== 'Unit'
                            ? setIngredient({
                                type: ingredient.type,
                                cost: ingredient.cost,
                                name: ingredient.name,
                                unit: item,
                              })
                            : setIngredient({
                                type: ingredient.type,
                                cost: ingredient.cost,
                                name: ingredient.name,
                                unit: '',
                              });
                          setMeasurementMenuVisible(false);
                        }}
                        title={item}
                        titleStyle={{fontSize: 15}}
                      />
                    );
                  })}
                </Menu>
              </View>
            </View>
          </View>
          <View style={{padding: 20}}>
            <Button onPress={() => onSave()}>
              <Text style={{color: 'black'}}>Save</Text>
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

export default NewIngredient;

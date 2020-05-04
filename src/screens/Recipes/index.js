import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, Card, Title, Paragraph, Button, Avatar} from 'react-native-paper';
import {AppColours} from '../../Styles/colour';
import {useSelector} from 'react-redux';

const Recipes = () => {
  const List = useSelector(state => state.recipeList);

  const state = useSelector(state => state);

  if (List !== undefined) {
    return <RecipeList recipes={List.recipes} />;
  } else {
    return (
      <Card>
        <Card.Actions>
          <Paragraph>
            You don't seem to have any recipes yet! Try adding one!
          </Paragraph>
        </Card.Actions>
      </Card>
    );
  }
};

const LeftContent = props => (
  <Avatar.Icon
    {...props}
    style={{backgroundColor: AppColours.secondaryColour}}
    icon="food"
  />
);

const RecipeList = props => {
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Your recipe list!</List.Subheader>
        {props.recipes.length > 0 ? (
          props.recipes.map(item => {
            <Card>
              <Card.Title
                title={item.name}
                subtitle={item.description}
                left={LeftContent}
              />
              <Card.Actions>
                <Button>Select</Button>
              </Card.Actions>
            </Card>;
          })
        ) : (
          <Card>
            <Card.Actions>
              <Paragraph>
                You don't seem to have any recipes yet! Try adding one!
              </Paragraph>
            </Card.Actions>
          </Card>
        )}
      </List.Section>
    </ScrollView>
  );
};

export default Recipes;

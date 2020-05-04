import React, {useState} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
  },
  textbox: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 4,
  },
});

const profilePicture = require('../../../assets/images/meandmark.jpg');

const EditProfile = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={profilePicture} />
      </View>
      <View>
        <TextInput
          style={styles.textbox}
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
    </View>
  );
};

export default EditProfile;

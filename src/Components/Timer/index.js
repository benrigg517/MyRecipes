import React from 'react';
import {Modal, Button} from 'react-native-paper';
import {View, Text} from 'react-native';

const Timer = () => {
  return (
    <Modal
      visible={true}
      contentContainerStyle={{
        backgroundColor: '#9fa5b3',
        height: '80%',
        width: '80%',
        alignSelf: 'center',
      }}>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          borderWidth: 2,
          height: '80%',
          backgroundColor: '#565d6e',
        }}>
        <View style={{alignSelf: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', left: 0, top: 50}}>
            <View
              style={{
                width: 40,
                backgroundColor: 'white',
                height: 60,
                borderWidth: 2,
              }}>
              <Text style={{textAlign: 'center', fontSize: 40}}>0</Text>
            </View>
            <View
              style={{
                width: 40,
                backgroundColor: 'white',
                height: 60,
                borderWidth: 2,
              }}>
              <Text style={{textAlign: 'center', fontSize: 40}}>0</Text>
            </View>
            <View
              style={{
                width: 40,
                backgroundColor: 'white',
                height: 60,
                borderWidth: 2,
              }}>
              <Text style={{textAlign: 'center', fontSize: 40}}>0</Text>
            </View>
            <View
              style={{
                width: 40,
                backgroundColor: 'white',
                height: 60,
                borderWidth: 2,
              }}>
              <Text style={{textAlign: 'center', fontSize: 40}}>0</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Button
              icon="play"
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                top: 40,
                right: 40,
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Timer;

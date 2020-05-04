import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Modal, Portal, IconButton} from 'react-native-paper';
import {AppColours} from '../../Styles/colour';

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: 'center',
  },
  modal: {
    maxHeight: Dimensions.get('window').height / 2,
    maxWidth: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    // borderColor: AppColours.primaryColour,
    // borderWidth: 1,
  },
  modalText: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: Dimensions.get('window').width / 15,
  },
  textContainer: {
    padding: '2%',
  },
});

const HelpButton = props => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <View>
      <IconButton
        icon="help-circle-outline"
        color={'#383838'}
        size={20}
        onPress={() => setShowDialog(true)}
      />
      <Dialog
        visible={showDialog}
        setVisible={setShowDialog}
        text={props.text}
      />
    </View>
  );
};

export default HelpButton;

const Dialog = props => {
  return (
    <Portal>
      <Modal
        style={styles.modalContainer}
        visible={props.visible}
        onDismiss={() => props.setVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.textContainer}>
            <Text style={styles.modalText}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

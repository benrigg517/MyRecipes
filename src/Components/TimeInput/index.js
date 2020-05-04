import React from 'react';
import {TextInput} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';

const TimeInput = props => {
  return (
    <TextInput
      label={props.label}
      value={props.timeHook.value}
      render={renderProps => (
        <TextInputMask
          style={{top: 15, left: 8}}
          onChangeText={text => props.timeHook.changeValue(text)}
          mask="[00]:[00]"
        />
      )}
    />
  );
};

export default TimeInput;

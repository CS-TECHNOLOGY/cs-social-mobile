import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scale} from '../../../theme/ScaleSheet';

function InputText(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textinput}
        secureTextEntry={props.secureTextEntry}
        fontSize={scale(16)}
      />
    </View>
  );
}

export default InputText;
const styles = StyleSheet.create({
  view: {width: '100%', marginTop: scale(20)},
  text: {fontSize: 18, color: '#f8f8ff'},
  textinput: {
    width: '100%',
    height: scale(50),
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
});

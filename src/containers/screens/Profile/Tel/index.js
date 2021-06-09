import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
const onPressTel = number => {
  Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));
};
const onPressSms = () => {
  console.log('sms');
};
const Tel = ({containerStyle, name, number}) => {
  return (
    <TouchableOpacity onPress={() => onPressTel(number)}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.iconRow}>
          <Icon
            name="call"
            underlayColor="transparent"
            iconStyle={styles.Icon}
            onPress={() => onPressTel(number)}
          />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>{number}</Text>
          </View>
          <View style={styles.telNameColumn}>
            {name.length !== 0 && (
              <Text style={styles.telNameText}>{name}</Text>
            )}
          </View>
        </View>
        <View style={styles.iconRow}>
          <Icon
            name="textsms"
            underlayColor="transparent"
            iconStyle={styles.Icon}
            onPress={() => onPressSms()}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tel;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  Icon: {
    fontSize: 30,
    color: '#fa8072',
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

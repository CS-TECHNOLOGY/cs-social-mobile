import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
const onPressEmail = email => {
  Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
    console.log('Error:', err),
  );
};
const Email = ({containerStyle, email}) => (
  <TouchableOpacity onPress={() => onPressEmail(email)} style={{marginTop: 15}}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        <Icon
          name="email"
          underlayColor="transparent"
          iconStyle={styles.emailIcon}
          onPress={() => onPressEmail(email)}
        />
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Email;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: '#fa8072',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
});

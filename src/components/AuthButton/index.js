import {View} from 'native-base';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {scale} from '../../../theme/ScaleSheet';
import images from '../../images';

function AuthButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      onPress={props.onPress}
      style={[styles.container, {...props.containerStyle}]}>
      {!props.loading ? (
        <View row>
          {props.img ? (
            <Image
              source={images.iconGoogle}
              style={{
                height: scale(19),
                width: scale(19),
                marginHorizontal: 15,
              }}
              resizeMode="contain"
            />
          ) : null}
          <Text style={[styles.text, {...props.textStyle}]}>{props.text}</Text>
        </View>
      ) : (
        <ActivityIndicator size="small" color="white" />
      )}
    </TouchableOpacity>
  );
}

export default AuthButton;
AuthButton.defaultProps = {
  containerStyle: {},
  textStyle: {},
  loading: false,
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F58233',
    borderRadius: scale(30),
    padding: scale(15),
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

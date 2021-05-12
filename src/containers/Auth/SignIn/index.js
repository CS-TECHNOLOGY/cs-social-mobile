import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ViewBackground from '../../../components/ViewBackground';
import InputText from '../../../components/InputText';
import AuthButton from '../../../components/AuthButton';
import {scale} from '../../../../theme/ScaleSheet';

const Sign = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ViewBackground style={styles.container}>
      <InputText
        secureTextEntry={false}
        title="Email"
        value={email}
        onChangeText={setEmail}
      />
      <InputText
        secureTextEntry={true}
        title="Password"
        value={password}
        onChangeText={setPassword}
      />
      <AuthButton
        containerStyle={{
          backgroundColor: '#1e90ff',
          width: '100%',
          borderRadius: scale(30),
        }}
        loading={props.loading}
        text="ĐĂNG NHẬP"
      />
    </ViewBackground>
  );
};

export default Sign;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

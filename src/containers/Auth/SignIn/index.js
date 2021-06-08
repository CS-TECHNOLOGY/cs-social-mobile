import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import images from '../../../assets/images';
import ButtonAnother from '../../../components/ButtonAnother';
import TextInputAnother from '../../../components/TextInputAnother';
import ViewBackground from '../../../components/ViewBackground';
import colors from '../../../utils/colors/colors';
import {scale} from '../../../utils/scaling/scaling';
import vari from '../../../utils/vari/vari';

export const SignIn = () => {
  return (
    <ViewBackground style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          height: vari.height,
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: scale(25),
          }}>
          <Image source={images.logo} style={styles.img} resizeMode="contain" />
        </View>
        <TextInputAnother label="Email" iconImg={images.iconEmail} />
        <View style={{height: scale(25)}} />
        <TextInputAnother label="Password" pass iconImg={images.iconPass} />
        <View style={{height: scale(25)}} />
        <ButtonAnother
          containerStyle={{backgroundColor: colors.carot}}
          text="LOGIN"
        />
      </ScrollView>
    </ViewBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vari.width / 12,
    justifyContent: 'space-evenly',
  },
  img: {
    width: vari.width / 2,
    height: vari.width / 2,
    alignItems: 'center',
  },
});

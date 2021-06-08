import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../../assets/images';
import ButtonAnother from '../../../components/ButtonAnother';
import TextInputAnother from '../../../components/TextInputAnother';
import ViewBackground from '../../../components/ViewBackground';
import colors from '../../../utils/colors/colors';
import {scale} from '../../../utils/scaling/scaling';
import vari from '../../../utils/vari/vari';

const Registration = ({navigation}) => {
  return (
    <ViewBackground style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          height: vari.height,
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.goBack()}>
          <Image
            source={images.icongoBack}
            style={styles.touch}
            resizeMode="center"
          />
        </TouchableOpacity>

        <TextInputAnother label="Name" iconImg={images.iconPersion} />
        <View style={{height: scale(15)}} />
        <TextInputAnother label="Email" iconImg={images.iconEmail} />
        <View style={{height: scale(15)}} />
        <TextInputAnother label="Phone number" iconImg={images.iconPhone} />
        <View style={{height: scale(15)}} />
        <TextInputAnother label="Password" pass iconImg={images.iconPass} />
        <View style={{height: scale(15)}} />
        <TextInputAnother
          label="ConFirm Password"
          pass
          iconImg={images.iconPass}
        />
        <View style={{height: scale(25)}} />
        <ButtonAnother
          containerStyle={{backgroundColor: colors.carot}}
          text="REGISTRATION"
        />
      </ScrollView>
    </ViewBackground>
  );
};
export default Registration;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vari.width / 12,
    justifyContent: 'space-evenly',
  },
  touch: {width: 30, height: 30},
});

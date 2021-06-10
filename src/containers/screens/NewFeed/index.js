import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../../assets/images/index';
import Tus from './Tus';
import {scale} from '../../../utils/scaling/scaling';
import ToolBar from '../../../components/ToolBar';
import vari from '../../../utils/vari/vari';
export const NewFeed = ({navigation}) => {
  return (
    <View>
      <ToolBar title="New Feed" />
      <View
        style={{
          height: vari.toolbarHeight,
          width: '100%',
          position: 'absolute',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <Image source={images.coco} style={styles.logo} resizeMode="cover" />
        </TouchableOpacity>
      </View>
      <Tus />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: scale(16),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: scale(48),
    backgroundColor: '#f9fafc',
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 1,
  },
  logo: {
    width: 46,
    height: 46,
    borderRadius: 23,
    right: 10,
  },
});

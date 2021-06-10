import moment from 'moment';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import images from '../../../assets/images';
import ItemInfor from '../../../components/ItemInfor';
import ToolBar from '../../../components/ToolBar';
import colors from '../../../utils/colors/colors';
import {showToast} from '../../../utils/tools/tools';
import vari from '../../../utils/vari/vari';

const MyProfile = ({navigation}) => {
  const [name, setName] = useState('Phạm Quang Núi');
  const [phone, setPhone] = useState('0914241029');
  const [email, setEmail] = useState('maxseo9x@gmail.com');
  const [birthday, setBirthday] = useState('DD-MM-YYYY');
  const [isVisible, setVisible] = useState(false);
  const [imageSource, setImageSource] = useState(images.coco);
  const showDone = () => {
    showToast('success', 'Congratulations', 'Your profile was updated', 'top');
  };
  const _showDateTimePicker = () => setVisible(true);
  const _hideDateTimePicker = () => setVisible(false);

  const _handleDatePicked = date => {
    _hideDateTimePicker;
    setBirthday(moment(date).format('DD-MM-YYYY'));
  };
  const logout = () => {
    Alert.alert('Đăng xuất', 'Are you ok ?', [
      {
        text: 'Hmmm',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('SignIn')},
    ]);
  };
  return (
    <View style={{backgroundColor: colors.notwhite, flex: 1}}>
      <ToolBar
        title="My Profile"
        iconRight={images.done}
        styleImgRight={colors.white}
        rightPress={showDone}
      />
      <ScrollView
        contentContainerStyle={{
          height: vari.height,
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.touchImg}>
          <Image style={styles.img} source={images.coco} resizeMode="cover" />
        </TouchableOpacity>

        <ItemInfor
          onChangeText={value => {
            setName(value);
          }}
          autoCapitalize="none"
          value={name}
          txtInput
          placeholder={'Nhập tên người dùng'}
          source={images.king}
          name="Tên người dùng"
        />
        <ItemInfor
          onChangeText={value => {
            setEmail(value);
          }}
          autoCapitalize="none"
          value={email}
          txtInput
          placeholder={'Tên đăng nhập'}
          source={images.iconPersion}
          name="Tên đăng nhập"
        />
        <ItemInfor
          source={images.date}
          name="Ngày sinh"
          touch
          onPress={_showDateTimePicker}
          text={birthday ? birthday : 'Vui lòng chọn ngày'}
        />
        <ItemInfor
          onChangeText={value => {
            setPhone(value);
          }}
          autoCapitalize="none"
          value={phone}
          txtInput
          placeholder={'SDT'}
          source={images.iconPhone}
          name="Số điện thoại"
        />
        <ItemInfor
          source={images.iconPass}
          name="Mật khẩu"
          touch
          text="Thay đổi"
          // onPress={() => this.props.navigation.navigate('ChangePass')}
        />
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: colors.red,
            marginTop: 10,
          }}
          onPress={logout}>
          Đăng xuất
        </Text>
      </ScrollView>

      <DateTimePicker
        mode="date"
        isVisible={isVisible}
        onConfirm={_handleDatePicked}
        onCancel={_hideDateTimePicker}
      />
    </View>
  );
};

export default MyProfile;
const styles = StyleSheet.create({
  img: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  touchImg: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import ItemInfor from '../../../components/ItemInfor';
import colors from '../../../utils/colors/colors';
import {scale} from '../../../utils/scaling/scaling';

const MyProfile = () => {
  const [name, setName] = useState('Phạm Quang Núi');
  const [phone, setPhone] = useState('0914241029');
  const [email, setEmail] = useState('maxseo9x@gmail.com');
  const [birthday, setBirthday] = useState('DD-MM-YYYY');
  const [isVisible, setVisible] = useState(false);
  const [imageSource, setImageSource] = useState(images.coco);
  return (
    <View style={{backgroundColor: colors.notwhite, flex: 1}}>
      <TouchableOpacity style={{alignItems: 'center', marginVertical: 20}}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
          source={images.coco}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Text
        style={{
          marginVertical: scale(10),
          marginBottom: scale(10),
          marginHorizontal: scale(20),
          color: colors.grey2,
          fontSize: 15,
        }}>
        TÀI KHOẢN ĐĂNG NHẬP
      </Text>
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
        source={images.iconPass}
        name="Mật khẩu"
        touch
        text="Thay đổi"
        // onPress={() => this.props.navigation.navigate('ChangePass')}
      />
    </View>
  );
};

export default MyProfile;

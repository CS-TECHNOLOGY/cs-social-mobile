import React, {Component} from 'react';
import {TouchableOpacity, Image, TextInput, View, Text} from 'react-native';
import colors from '../../utils/colors/colors';
import {scale} from '../../utils/scaling/scaling';
import vari from '../../utils/vari/vari';
export class ItemInfor extends Component {
  render() {
    const {txtInput, title, touch, placeholder, text, name, source, onPress} =
      this.props;

    return (
      <View
        style={{
          paddingHorizontal: scale(20),
          height: scale(60),
          borderBottomWidth: 1,
          borderBottomColor: '#EDEEF0',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={source}
            style={{width: scale(20), width: scale(20), tintColor: colors.sand}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontWeight: '600',
              marginHorizontal: scale(10),
              fontSize: 15,
              textAlign: 'center',
              color: colors.gray2,
            }}>
            {name}
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {txtInput && (
            <TextInput
              {...this.props}
              placeholderTextColor={colors.sand}
              selectionColor={colors.sand}
              placeholder={placeholder}
              style={{
                color: colors.red,
                fontSize: scale(14),
                textAlign: 'right',
                height: scale(44),
                width: (vari.width * 2) / 4,
              }}
            />
          )}
          {title && (
            <View
              style={{
                height: scale(44),
                alignItems: 'flex-end',
                justifyContent: 'center',
                width: (vari.width * 2) / 4,
                textAlign: 'right',
              }}>
              <Text style={{fontSize: 15, color: colors.red}} numberOfLines={1}>
                {title}
              </Text>
            </View>
          )}
          {touch && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: scale(44),
                width: (vari.width * 2) / 4,
              }}>
              <TouchableOpacity onPress={onPress}>
                <Text style={{fontSize: 15, color: colors.red}}>{text}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default ItemInfor;

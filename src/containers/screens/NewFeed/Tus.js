import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import DATA from './Mocks/index';
import LikeandShare from './LikeandShare';
import Stories from './Stories';
import images from '../../../assets/images';
import colors from '../../../utils/colors/colors';
import {scale} from '../../../utils/scaling/scaling';
import {Post} from './Post';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Tus() {
  const renderItem = ({item, index}) => {
    if (index === 0) {
      return (
        <View>
          <Stories/>
          <Post/>
        </View>
      );
    } else {
      return (
        <View style={styles.newfeed}>
          <View style={styles.headertus}>
            <TouchableOpacity style={styles.leftHeaderTus}>
              <Image
                style={styles.avatar}
                source={item.authorAvatar}
                styles={styles.imageLeftHeaderTus}
              />

              <Text style={styles.text}>{item.authorName}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              {/* <Entypo name="dots-three-vertical" size={16} color="black" /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.tus}>
            {/* <Text> Có Quanghieus và {item.viewCount}  người thích</Text> */}
            <Text style={styles.text}>
              {item.authorName} <Text>{item.tus}</Text>
            </Text>
          </View>
          <Image source={item.image} style={styles.imagestyle} />

          <LikeandShare />

          <View style={styles.like}>
            {/* <Text> Có Quanghieus và {item.viewCount}  người thích</Text> */}
            <Text>Có </Text>
            <Text style={styles.text}>Quanghieus </Text>
            <Text>và </Text>
            <Text style={styles.text}>{item.viewCount} người khác </Text>
            <Text>thích</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.comment}>Xem tất cả 9 bình luận </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  headertus: {
    width: '100%',
    height: scale(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
  },
  text: {
    fontWeight: 'bold',
  },
  avatar: {
    width: scale(32),
    height: scale(32),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: scale(4),
  },
  imagestyle: {
    width: windowWidth,
    height: (windowWidth * 460) / 700,
  },
  newfeed: {
    borderBottomColor: colors.grey1,
    borderBottomWidth: scale(8),
    flex: 1,
  },
  tus: {
    flexDirection: 'row',
    marginTop: 4,
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  leftHeaderTus: {flexDirection: 'row', alignItems: 'center'},
  imageLeftHeaderTus: {width: '100%', height: '100%'},
  like: {flexDirection: 'row', marginLeft: scale(16), marginTop: 4},
  comment: {color: 'gray', marginLeft: scale(16), marginBottom: 8},
});

import React from 'react';
import STORIES from './Mocks/index';
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {scale} from '../../../utils/scaling/scaling';
const renderStories = ({item, index}) => {
  if (index % 2 == 0) {
    return (
      <TouchableOpacity style={{paddingVertical: 4}}>
        <Image style={styles.stories} source={item.authorAvatar} />
        <Text style={{fontSize: 10, marginLeft: 16}}>{item.authorName}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{paddingVertical: 4}}>
        <Image style={styles.stories2} source={item.authorAvatar} />
      </TouchableOpacity>
    );
  }
};

export default function Stories() {
  return (
    <View>
      <FlatList
        data={STORIES}
        renderItem={renderStories}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          marginLeft: 16,
        }}
      />
      <View
        style={{
          marginTop: 4,
          borderBottomColor: 'black',
          borderBottomWidth: 0.2,
          borderBottomColor: '#bdc3c7',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  stories: {
    width: scale(56),
    height: scale(56),
    borderWidth: 2.5,
    borderColor: '#c40000',
    borderRadius: scale(28),
    overflow: 'hidden',
    marginLeft: scale(16),
    // zIndex:1,
    // position: "absolute",
  },
  stories2: {
    width: scale(56),
    height: scale(56),
    borderWidth: 2.5,
    borderColor: 'gray',
    borderRadius: scale(28),
    overflow: 'hidden',
    marginLeft: scale(16),
  },
  backstories: {
    marginLeft: scale(12),
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    overflow: 'hidden',
  },
});

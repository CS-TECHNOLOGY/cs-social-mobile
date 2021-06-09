import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import ToolBar from '../../../components/ToolBar';
import colors from '../../../utils/colors/colors';

function ListFriend({navigation}) {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Nathan Greizman',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Ronaldo',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Messi',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Cafu',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Benteke',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Mo Salah',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Sadio Mane',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Pele',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Zlatan',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Pich Khoe',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Chu Du',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Phạm Quang Núi',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Đặng Quyết Huynh',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    {
      name: 'Đức Huynh',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      city: 'Hà Nội',
      country: 'Việt Nam',
      phone: '0913234143',
      email: 'sondeptrai@gmail.com',
    },
    // ... // more items
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Profile', {
          item: item,
        });
      }}>
      <ListItem bottomDivider>
        <Avatar
          title={item.name[0]}
          source={item.avatar_url && {uri: item.avatar_url}}
        />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
  return (
    <View style={{backgroundColor: colors.smoke}}>
      <ToolBar search />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
        renderItem={renderItem}
      />
    </View>
  );
}
export default ListFriend;

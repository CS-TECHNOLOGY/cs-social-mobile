import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Rating} from 'react-native-elements';
import Tel from './Tel';
import Email from './Email';
import images from '../../../assets/images';
import Header from './Header';

const ProfileScreen = () => {
  const renderHeader = () => (
    <Header
      name="Đặng Anh Sơn"
      img={images.coco}
      city="Hà Nội"
      country="Việt Nam"
      background={images.background}
    />
  );
  const renderTel = () => (
    <Tel key={`tel-${1}`} name="Đặng Anh Sơn" number="0387140336" />
  );
  const renderEmail = () => (
    <Email key={`email-${1}`} name="Đặng Anh Sơn" email="maxseo9x@gmail.com" />
  );
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          {renderHeader()}
          {renderTel()}
          {renderEmail()}
          <Card.Divider />
          <Rating type="heart" ratingCount={10} imageSize={30} showRating />
        </Card>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
});

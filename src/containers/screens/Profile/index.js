import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Rating} from 'react-native-elements';
import Tel from './Tel';
import Email from './Email';
import images from '../../../assets/images';
import Header from './Header';
const Profile = ({route, navigation}) => {
  const renderHeader = item => (
    <Header
      name={item.name}
      img={images.coco}
      city={item.city}
      country={item.country}
      background={images.background}
      onPress={() => navigation.goBack()}
    />
  );
  const renderTel = item => <Tel name={item.name} number={item.phone} />;
  const renderEmail = item => <Email name={item.name} email={item.email} />;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          {renderHeader(route.params.item)}
          {renderTel(route.params.item)}
          {renderEmail(route.params.item)}
          <Card.Divider />
          <Rating type="heart" ratingCount={10} imageSize={30} showRating />
        </Card>
      </View>
    </ScrollView>
  );
};
export default Profile;
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

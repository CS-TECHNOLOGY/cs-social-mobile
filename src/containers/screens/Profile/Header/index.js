import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import images from '../../../../assets/images';
const Header = ({img, name, city, country, background, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={background}>
        <TouchableOpacity style={styles.touch} onPress={onPress}>
          <Image
            source={images.icongoBack}
            style={styles.img}
            resizeMode="center"
          />
        </TouchableOpacity>

        <View style={styles.headerColumn}>
          <Image style={styles.userImage} source={img} />
          <Text style={styles.userNameText}>{name}</Text>
          <View style={styles.userAddressRow}>
            <View>
              <Icon
                name="place"
                underlayColor="transparent"
                iconStyle={styles.placeIcon}
              />
            </View>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
                {city},{country}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
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
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  touch: {marginLeft: 20, width: 30, height: 30},
  img: {
    width: 30,
    height: 30,
  },
});

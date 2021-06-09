import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors/colors';
function ViewBackground(props) {
  return (
    <LinearGradient
      end={{x: 1, y: 1}}
      colors={[colors.sand, colors.brown]}
      locations={[0, 1]}
      style={props.style}>
      {props.children}
    </LinearGradient>
  );
}

export default ViewBackground;

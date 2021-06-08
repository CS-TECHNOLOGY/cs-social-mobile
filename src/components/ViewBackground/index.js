import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
function ViewBackground(props) {
  return (
    <LinearGradient
      end={{x: 1, y: 1}}
      colors={['#1e90ff', '#87cefa']}
      locations={[0, 1]}
      style={props.style}>
      {props.children}
    </LinearGradient>
  );
}

export default ViewBackground;

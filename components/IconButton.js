import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from '../stylesheets/Styles';

const IconButton = ({
  handlePress,
  buttonColor,
  iconColor,
  icon
}) => {

  const styles = Styles.get();

  return (
    <TouchableHighlight
      style={styles.iconUnderlay}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={handlePress}
    >
      <View elevation={5} style={{...styles.iconButton, backgroundColor: buttonColor}}>
        <Icon name={icon} color={iconColor} size={30}></Icon>
      </View>
    </TouchableHighlight>
  );
};

export default IconButton;

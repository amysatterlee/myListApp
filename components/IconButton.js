import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({
  handlePress,
  buttonColor,
  iconColor,
  icon
}) => {
  const styles = StyleSheet.create({
    underlay: {
      height: 64,
      width: 64,
      borderRadius: 32
    },
    button: {
      height: 64,
      width: 64,
      borderRadius: 32,
      backgroundColor: buttonColor,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  return (
    <TouchableHighlight
      style={styles.underlay}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={handlePress}
    >
      <View elevation={5} style={styles.button}>
        <Icon name={icon} color={iconColor} size={30}></Icon>
      </View>
    </TouchableHighlight>
  );
};

export default IconButton;

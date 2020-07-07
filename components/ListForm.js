import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, TextInput } from 'react-native';
import { Styles, Colors } from '../stylesheets/Styles';

const ListForm = ({
  show,
  dismissModal,
  title,
  submitButtonText,
  handleSubmit
}) => {

  const styles = Styles.get('darkgrey');

  const [value, setValue] = useState('');
  const [selectedColor, setColor] = useState('grey');

  const handleTextChange = (val) => {
    setValue(val);
  };

  useEffect(() => {
    if (show) {
      setValue('');
      setColor('grey');
    }
  }, [show]);

  const getStyle = (color) => {
    let colorStyle = {
      ...styles.badge,
      backgroundColor: color
    };
    if (color === selectedColor) {
      colorStyle.borderColor = 'black';
      colorStyle.borderStyle = 'solid';
      colorStyle.borderWidth = 2;
    };
    return colorStyle;
  };

  const handleSubmitPress = () => {
    if (value && value.length > 0) {
      handleSubmit({name: value, color: selectedColor});
    }
  }

  return (
    <Modal transparent={true} visible={show} animationType="fade">
      <View elevation={10} style={styles.modalView}>
        <View style={styles.modalDialog}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
          <View>
            <TextInput
              autoFocus={true}
              showSoftInputOnFocus={true}
              style={styles.textInput}
              onChangeText={handleTextChange}
              onSubmitEditing={handleSubmitPress}
              value={value}
            />
            <View style={styles.colorGrid}>
              <TouchableOpacity
                onPress={() => setColor('grey')}
                style={getStyle('grey')}
              />
              <TouchableOpacity
                onPress={() => setColor(Colors.red)}
                style={getStyle(Colors.red)}
              />
              <TouchableOpacity
                onPress={() => setColor(Colors.orange)}
                style={getStyle(Colors.orange)}
              />
            </View>
            <View style={styles.colorGrid}>
              <TouchableOpacity
                onPress={() => setColor(Colors.blue)}
                style={getStyle(Colors.blue)}
              />
              <TouchableOpacity
                onPress={() => setColor(Colors.purple)}
                style={getStyle(Colors.purple)}
              />
              <TouchableOpacity
                onPress={() => setColor(Colors.green)}
                style={getStyle(Colors.green)}
              />
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonLeft} onPress={handleSubmitPress}>
                <Text style={styles.buttonText}>{submitButtonText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRight} onPress={dismissModal}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ListForm;

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

  const styles = Styles.get();

  const [value, setValue] = useState('');
  const [selectedColor, setColor] = useState('grey');

  const handleTextChange = (val) => {
    setValue(val);
  };

  useEffect(() => {
    setValue('');
  }, []);

  const renderColorSelector = (color) => {
    let colorStyle = {
      ...styles.badge,
      backgroundColor: color
    };
    colorStyle.borderColor = color === selectedColor ? 'darkgrey' : null;
    colorStyle.borderStyle = color === selectedColor ? 'solid' : 'none';
    return (
      <View
        onPress={() => selectColor(color)}
        style={colorStyle}
      />
    );
  };

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
              onSubmitEditing={handleSubmit}
              value={value}
            />
            <View style={styles.colorGrid}>
              {renderColorSelector('grey')}
              {renderColorSelector(Colors.red)}
              {renderColorSelector(Colors.orange)}
            </View>
            <View style={styles.colorGrid}>
              {renderColorSelector(Colors.blue)}
              {renderColorSelector(Colors.purple)}
              {renderColorSelector(Colors.green)}
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonLeft} onPress={handleSubmit}>
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

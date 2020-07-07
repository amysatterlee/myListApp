import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, TextInput } from 'react-native';
import { Styles } from '../stylesheets/Styles';

const ItemForm = ({
  show,
  dismissModal,
  title,
  submitButtonText,
  handleSubmit,
  color
}) => {

  const styles = Styles.get(color);

  const [value, setValue] = useState('');

  const handleTextChange = (val) => {
    setValue(val);
  };

  useEffect(() => {
    if (show) {
      setValue('');
    }
  }, [show]);

  const handleSubmitPress = () => {
    if (value && value.length > 0) {
      handleSubmit(value);
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

export default ItemForm;

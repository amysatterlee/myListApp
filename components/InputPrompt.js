import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, TextInput } from 'react-native';

const InputPrompt = ({
  show,
  dismissModal,
  title,
  submitButtonText,
  handleSubmit
}) => {
  const [value, setValue] = useState('');

  const handleTextChange = (val) => {
    setValue(val);
  };

  useEffect(() => {
    setValue('');
  }, []);

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

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange'
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'lightgrey',
    opacity: 0.8
  },
  modalDialog: {
    width: '75%',
    backgroundColor: 'white',
    borderColor: 'orange',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10
  },
  textInput: {
    justifyContent: 'center',
    fontSize: 18,
    color: 'black',
    margin: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  buttonRow: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginTop: 10
  },
  buttonLeft: {
    borderRightColor: 'orange',
    borderRightWidth: 1,
    flex: 1
  },
  buttonRight: {
    borderLeftColor: 'orange',
    borderLeftWidth: 1,
    flex: 1
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
    marginTop: 10
  },
});

export default InputPrompt;

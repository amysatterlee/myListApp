import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';

const ConfirmPrompt = ({
  show,
  dismissModal,
  title,
  message,
  confirmButtonText,
  handleConfirm
}) => {
  return (
    <Modal transparent={true} visible={show} animationType="fade">
      <View elevation={10} style={styles.modalView}>
        <View style={styles.modalDialog}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
          <View>
            <Text style={styles.modalText}>{message}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonLeft} onPress={handleConfirm}>
                <Text style={styles.buttonText}>{confirmButtonText}</Text>
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
  modalText: {
    justifyContent: 'center',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    margin: 10
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

export default ConfirmPrompt;

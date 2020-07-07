import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { Styles } from '../stylesheets/Styles';

const ConfirmPrompt = ({
  show,
  dismissModal,
  title,
  message,
  confirmButtonText,
  handleConfirm,
  color
}) => {

  const styles = Styles.get(color);

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

export default ConfirmPrompt;

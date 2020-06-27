import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';
import IconButton from './components/IconButton';
import ListWidget from './components/ListWidget';
import ConfirmPrompt from './components/ConfirmPrompt';

const App: () => React$Node = () => {
  const [lists, setLists] = useState([
    {key: '1', name: 'Shopping'},
    {key: '2', name: 'Weekend To Do'},
    {key: '3', name: 'Work To Do'}
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleCreate = () => {
    alert('button pressed');
  };

  const handleItemPress = () => {
    alert('item pressed');
  };

  const handleItemLongPress = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
  // TODO process confirmation of delete
    hideModal();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ListWidget
          items={lists}
          listColor="orange"
          listName="My Lists"
          handlePress={handleItemPress}
          handleLongPress={handleItemLongPress}
        />
        <View style={styles.footer}>
          <IconButton
            buttonColor="orange"
            iconColor="white"
            handlePress={handleCreate}
            icon="plus"
          />
        </View>
        <ConfirmPrompt
          show={showModal}
          dismissModal={hideModal}
          title="List Name"
          message="Are you sure you want to delete this list?"
          confirmButtonText="Delete"
          handleConfirm={handleDelete}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
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
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'lightgrey',
    opacity: 0.7
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
    textAlign: 'center'
  },
  buttonRow: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginTop: 10
  },
  modalButton: {
    borderColor: 'orange',
    borderWidth: 1,
    borderStyle: 'solid',
    flex: 1
  }
});

export default App;

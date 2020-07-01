import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';
import IconButton from './components/IconButton';
import ListWidget from './components/ListWidget';
import ConfirmPrompt from './components/ConfirmPrompt';
import InputPrompt from './components/InputPrompt';


const App: () => React$Node = () => {
  const [lists, setLists] = useState([
    {key: '1', name: 'Shopping', color: 'lightblue'},
    {key: '2', name: 'Weekend To Do', color: 'lightgreen'},
    {key: '3', name: 'Work To Do', color: 'lightpink'}
  ]);

  const [selected, setSelected] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleCreate = () => {
    setModalType('add');
    setShowModal(true);
  };

  const handleItemPress = (item) => {
    setSelected(item);
    alert('item pressed');
  };

  const handleItemLongPress = (item) => {
    setSelected(item);
    setModalType('delete');
    setShowModal(true);
  };

  const hideModal = () => {
    setSelected(null);
    setShowModal(false);
    setModalType(null);
  };

  const handleDelete = () => {
    deleteList();
    hideModal();
  };

  const deleteList = () => {
    let newLists = lists.filter(item => item.key != selected.key);
    setLists(newLists);
  };

  const handleAdd = () => {
    hideModal();
    alert('adding item');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="lightgrey"
          translucent={true}
        />
        <ListWidget
          items={lists}
          listColor="lightgrey"
          listName="My Lists"
          handlePress={handleItemPress}
          handleLongPress={handleItemLongPress}
        />
        <View style={styles.footer}>
          <IconButton
            buttonColor="lightgrey"
            iconColor="white"
            handlePress={handleCreate}
            icon="plus"
          />
        </View>
        <ConfirmPrompt
          show={showModal && modalType === 'delete'}
          dismissModal={hideModal}
          title={selected && selected.name ? selected.name : "Generic List"}
          message="Are you sure you want to delete this list?"
          confirmButtonText="Delete"
          handleConfirm={handleDelete}
        />
        <InputPrompt
          show={showModal && modalType === 'add'}
          dismissModal={hideModal}
          title="Name Your List"
          submitButtonText="Add"
          handleSubmit={handleAdd}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 15
  },
  header: {
    height: 60,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightgrey'
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default App;

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import IconButton from './components/IconButton';
import ListWidget from './components/ListWidget';
import ConfirmPrompt from './components/ConfirmPrompt';
import ListForm from './components/ListForm';
import { Styles } from './stylesheets/Styles';

const App: () => React$Node = () => {

  const styles = Styles.get();

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
        <ListForm
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

export default App;

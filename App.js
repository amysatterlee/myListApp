import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, ActivityIndicator } from 'react-native';
import IconButton from './components/IconButton';
import ListWidget from './components/ListWidget';
import ConfirmPrompt from './components/ConfirmPrompt';
import ListForm from './components/ListForm';
import { Styles, Colors } from './stylesheets/Styles';

const App: () => React$Node = () => {

  const styles = Styles.get();

  const [lists, setLists] = useState([]);
  const [selected, setSelected] = useState(null);
  const [listItems, setListItems] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLists([
      {id: 1, name: 'Shopping', color: Colors.blue},
      {id: 2, name: 'Weekend To Do', color: Colors.green},
      {id: 3, name: 'Work To Do', color: Colors.red}
    ]);
  }, []);

  const handleCreate = () => {
    setModalType('add');
    setShowModal(true);
  };

  const handleItemPress = (item) => {
    // TODO add database lookup to get the array of list items
    setSelected(item);
    retrieveList(item);
    setShowList(true);
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
    let newLists = lists.filter(item => item.id != selected.id);
    setLists(newLists);
  };

  const retrieveList = (item) => {
    console.log(`Retreiving List with id ${item.id}`);
    setLoading(true);
    setTimeout(() => {
      setListItems([
        {id: 1, name: 'First item on the list',  status: 'active'},
        {id: 2, name: 'Second item on the list', status: 'active'},
        {id: 3, name: 'Third item on the list',  status: 'active'}
      ]);
      setLoading(false);
    }, 2000);
  }

  const handleAdd = (item) => {
    // TODO add call to db to add item
    const max = lists.reduce((winner, current) => {
      return Math.max(winner, current.id);
    }, 0);
    let newLists = lists.slice();
    newLists.push({...item, id: max + 1});
    setLists(newLists);
    hideModal();
  };

  const renderListWidget = () => {
    const listColor = showList ? selected.color : 'lightgrey';
    const items = showList ? listItems : lists;
    const listName = showList ? selected.name : 'My Lists';
    return (
      <ListWidget
        items={items}
        listColor={listColor}
        listName={listName}
        handlePress={handleItemPress}
        handleLongPress={handleItemLongPress}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={showList ? selected.color : 'lightgrey'}
          translucent={true}
        />
        {loading ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              size="large"
              color={showList ? selected.color : 'lightgrey'}
              animating={loading}
            />
          </View>
        ) : (
          <>
            {renderListWidget()}
            <View style={styles.footer}>
              <IconButton
                buttonColor={showList ? selected.color : 'lightgrey'}
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
          </>
        )}

      </SafeAreaView>
    </>
  );
};

export default App;

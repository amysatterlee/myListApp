import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import IconButton from './components/IconButton';
import ListWidget from './components/ListWidget';

const App: () => React$Node = () => {
  const [lists, setLists] = useState([
    {key: '1', name: 'Shopping'},
    {key: '2', name: 'Weekend To Do'},
    {key: '3', name: 'Work To Do'}
  ]);

  const handleCreate = () => {
    alert('button pressed');
  };

  const handleItemPress = () => {
    alert('item pressed');
  };

  const handleItemLongPress = () => {
    alert('item long pressed');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ListWidget items={lists} listColor="orange" listName="My Lists"/>
        <View style={styles.footer}>
          <IconButton
            buttonColor="orange"
            iconColor="white"
            handlePress={handleCreate}
            icon="plus"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default App;

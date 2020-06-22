import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';

const App: () => React$Node = () => {
  const [lists, setLists] = useState([
    {key: '1', name: 'Shopping'},
    {key: '2', name: 'Weekend To Do'},
    {key: '3', name: 'Work To Do'}
  ]);

  const renderItem = ({item, idx}) => {
    return (
      <Text key={item.key} style={styles.text}>
        {item.name}
      </Text>);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={lists}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'lightgrey'
  }
});

export default App;

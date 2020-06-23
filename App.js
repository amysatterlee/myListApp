import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

const App: () => React$Node = () => {
  const [lists, setLists] = useState([
    {key: '1', name: 'Shopping'},
    {key: '2', name: 'Weekend To Do'},
    {key: '3', name: 'Work To Do'}
  ]);

  const renderItem = ({item, idx}) => {
    return (
      <View style={styles.itemView}>
        <Text key={item.key} style={styles.text}>
          {item.name}
        </Text>
      </View>);
  };

  const renderSeparator = () => {
    return (
      <View style={styles.separatorView}>
        <View style={styles.separatorLine}/>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={lists}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          style={styles.list}
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
  list: {

  },
  itemView: {
    height: 60,
    padding: 10,
    backgroundColor: 'lightgrey'
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  separatorView: {
    height: 1,
    backgroundColor: 'lightgrey'
  },
  separatorLine: {
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'grey'
  }
});

export default App;

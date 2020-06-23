import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';

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

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>My Lists</Text>
      </View>
    );
  };

  const handleCreate = () => {
    alert('button pressed');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={lists}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
        />
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleCreate}>
            <Text style={styles.buttonText}>Create List</Text>
          </TouchableOpacity>
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
  list: {
    height: '100%'
  },
  header: {
    height: 60,
    backgroundColor: 'purple',
    justifyContent: 'center'
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center'
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
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
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

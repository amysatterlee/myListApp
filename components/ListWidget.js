import React from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';

const ListWidget = ({
  items,
  listColor,
  listName,
  handlePress,
  handleLongPress
}) => {

  const styles = StyleSheet.create({
    list: {
      height: '100%'
    },
    header: {
      height: 60,
      backgroundColor: listColor,
      justifyContent: 'center'
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

  const renderItem = ({item, idx}) => {
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => handlePress(item)}
        onLongPress={() => handleLongPress(item)}
      >
        <Text key={item.key} style={styles.text}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
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
        <Text style={styles.headerText}>{listName}</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.list}
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default ListWidget;

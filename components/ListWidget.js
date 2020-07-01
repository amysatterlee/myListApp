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
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      color: 'black',
    },
    headerText: {
      fontSize: 24,
      textAlign: 'center',
      color: 'black'
    },
    separatorView: {
      height: 1,
      backgroundColor: 'white'
    },
    separatorLine: {
      height: 1,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: 'grey'
    },
    block: {
      width: 20,
      height: 20,
      marginRight: 5,
      marginLeft: 15
    }
  });

  const renderItem = ({item, idx}) => {
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => handlePress(item)}
        onLongPress={() => handleLongPress(item)}
      >
        <View style={{...styles.block, backgroundColor: item.color}}/>
        <Text key={item.key} style={{...styles.text, borderBottomColor: item.color, borderBottomWidth: 2}}>
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

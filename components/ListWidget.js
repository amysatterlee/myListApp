import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { Styles } from '../stylesheets/Styles';

const ListWidget = ({
  items,
  listColor,
  listName,
  handlePress,
  handleLongPress
}) => {

  const styles = Styles.get();

  const renderItem = ({item, idx}) => {
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => handlePress(item)}
        onLongPress={() => handleLongPress(item)}
      >
        <View style={{...styles.badge, backgroundColor: item.color}}/>
        <Text key={item.key.toString()} style={{...styles.text, borderBottomColor: item.color, borderBottomWidth: 2}}>
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
      <View style={{...styles.header, backgroundColor: listColor}}>
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

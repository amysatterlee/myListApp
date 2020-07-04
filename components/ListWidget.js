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
    const textStyle = {...styles.text};
    if (item.color) {
      textStyle.borderBottomColor = item.color;
      textStyle.borderBottomWidth = 2;
    };

    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => handlePress(item)}
        onLongPress={() => handleLongPress(item)}
      >
        {item.color ? (
          <View style={{...styles.badge, backgroundColor: item.color}}/>
        ) : (
          null
        )}
        <Text style={textStyle}>
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

  return (
    <>
      <View elevation={5} style={{...styles.header, backgroundColor: listColor}}>
        <Text style={styles.headerText}>{listName}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, idx) => item.id.toString()}
      />
    </>
  );
};

export default ListWidget;

import { StyleSheet } from 'react-native';

export const Styles = {
  get: () => StyleSheet.create({
    list: {
      height: '100%'
    },
    header: {
      height: 60,
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
      color: 'darkgrey',
    },
    headerText: {
      fontSize: 24,
      textAlign: 'center',
      color: 'darkgrey'
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
  })
};
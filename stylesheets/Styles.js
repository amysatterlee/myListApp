import { StyleSheet } from 'react-native';

export const Colors = {
  purple: '#C39BD3',
  blue: '#85C1E9',
  green: '#82E0AA',
  red: '#F1948A',
  orange: '#F0B27A'
};

export const Styles = {
  get: (color) => StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      marginBottom: 15
    },
    list: {
      height: '100%'
    },
    header: {
      height: 60,
      justifyContent: 'center'
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: color || 'white'
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
      color: 'darkgrey'
    },
    modalText: {
      fontSize: 18,
      color: 'black',
      padding: 5,
      textAlign: 'center'
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
    badge: {
      width: 30,
      height: 30,
      marginRight: 5,
      marginLeft: 15,
      borderRadius: 15
    },
    footer: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    modalView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: 'lightgrey',
      opacity: 0.8
    },
    modalDialog: {
      width: '75%',
      backgroundColor: 'white',
      borderColor: color || 'darkgrey',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 10
    },
    textInput: {
      justifyContent: 'center',
      fontSize: 18,
      color: 'black',
      margin: 10,
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    buttonRow: {
      flexDirection: 'row',
      height: 50,
      justifyContent: 'center',
      marginTop: 10
    },
    buttonLeft: {
      borderRightColor: color || 'darkgrey',
      borderRightWidth: 1,
      flex: 1
    },
    buttonRight: {
      borderLeftColor: color || 'darkgrey',
      borderLeftWidth: 1,
      flex: 1
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: color || 'darkgrey',
      marginTop: 10
    },
    iconUnderlay: {
      height: 64,
      width: 64,
      borderRadius: 32
    },
    iconButton: {
      height: 64,
      width: 64,
      borderRadius: 32,
      justifyContent: 'center',
      alignItems: 'center'
    },
    colorGrid: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      alignContent: 'center',
      margin: 10
    }
  })
};

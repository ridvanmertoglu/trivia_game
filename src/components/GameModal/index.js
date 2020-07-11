import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';

const GameModal = (props) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalSecondContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{props.icon}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.mainDescription}>{props.mainDescription}</Text>
          <Text style={styles.subDescription}>{props.subDescriptionOne}</Text>
          <Text style={styles.subDescription}>{props.subDescriptionTwo}</Text>
        </View>
        <TouchableOpacity onPress={props.buttonAction}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonName}>{props.buttonName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = {
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalSecondContainer: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 250,
    backgroundColor: '#1e90ff',
    borderRadius: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    backgroundColor: '#a6dced',
    borderRadius: 120,
  },
  icon: {
    color: 'white',
    fontSize: 100,
    fontWeight: '500',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
  },
  mainDescription: {
    color: 'white',
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 40,
  },
  subDescription: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
};

export default GameModal;

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const GameModal = (props) => {
  return (
    <View style={styles.modalContainer}>
      <View style={[styles.modalSecondContainer, props.extraStyle]}>
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

export default GameModal;

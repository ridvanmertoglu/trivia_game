import React, {Component} from 'react';
import {View, Button, Picker} from 'react-native';

export const GamePicker = (props) => {
  return (
    <View styles={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={this.props.selectedValue}
        onValueChange={this.props.onValueChange}>
        {Object.keys(this.props.pickerList).map((item, index) => (
          <Picker.Item
            key={index}
            label={this.props.pickerList[item]}
            value={item}></Picker.Item>
        ))}
      </Picker>
    </View>
  );
};

export const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: '50%',
  },
};

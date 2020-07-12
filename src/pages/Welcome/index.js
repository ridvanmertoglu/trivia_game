/* @flow */
import React, {useState} from 'react';
import {Text, View, Picker, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import {getQuestions} from '../../api';
import {images} from '../../utils/images';

import {
  questionsRequest,
  questionsSuccess,
  questionsFail,
} from '../../store/actions/questions';

const Welcome = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  _onStart = () => {
    props.questionsRequest();
    getQuestions(selectedCategory, selectedDifficulty)
      .then((response) => {
        props.questionsSuccess(response.data.results);
        console.log(response.data.results);
        props.navigation.navigate('Main');
      })
      .catch((error) => {
        props.questionsFail();
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={images.rnIcon} />
        <Text style={styles.gameTitle}>A trivia game</Text>
        <Text style={styles.subTitle}>Select category and difficulty.</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }>
          {props.categories.map((item, index) => (
            <Picker.Item
              key={index}
              label={item.name}
              value={item.id}></Picker.Item>
          ))}
        </Picker>
      </View>
      <View style={styles.difficultyContainer}>
        <Picker
          selectedValue={selectedDifficulty}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDifficulty(itemValue)
          }>
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_onStart}>
          <View style={styles.button}>
            <Text style={styles.buttonName}>GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = ({categoriesReducer, questionsReducer}) => {
  const {categories} = categoriesReducer;
  const {questions} = questionsReducer;
  return {categories, questions};
};

const mapDispatchToProps = {
  questionsRequest,
  questionsSuccess,
  questionsFail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

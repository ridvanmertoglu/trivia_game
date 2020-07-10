/* @flow */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Picker, TouchableOpacity} from 'react-native';
import {GamePicker} from '../../components/GamePicker';
import {connect} from 'react-redux';
import Init from '../../helpers/Init';
import {getQuestions} from '../../api/questions';

import {
  categoriesRequest,
  categoriesSuccess,
  categoriesFail,
} from '../../store/actions/categories';

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
      <View style={{marginBottom: 10}}>
        <Picker
          selectedValue={selectedCategory}
          style={{height: 50, width: 300}}
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
      <View style={{marginTop: 10, justifyContent: 'flex-end'}}>
        <Picker
          selectedValue={selectedDifficulty}
          style={{height: 50, width: 300}}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDifficulty(itemValue)
          }>
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
      </View>

      <View
        style={{
          marginTop: 60,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={_onStart}>
          <View
            style={{
              backgroundColor: 'blue',
              width: 150,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 25, color: 'white'}}>start</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const mapStateToProps = ({categoriesReducer,questionsReducer}) => {
  const {categories} = categoriesReducer;
  const {questions} = questionsReducer;
  return {categories,questions};
};

const mapDispatchToProps = {
  categoriesRequest,
  categoriesSuccess,
  categoriesFail,
  questionsRequest,
  questionsSuccess,
  questionsFail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

/**
 * class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
    };
  }
  _setSelectedCategory = (value) => {
    this.setState({
      selectedCategory: value,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => this._setSelectedCategory}>
          {Object.keys(this.props.categories).map((item, index) => (
            <Picker.Item
              key={index}
              label={props.categories[item]}
              value={item}></Picker.Item>
          ))}
        </Picker>
      </View>
    );
  }
}
 */

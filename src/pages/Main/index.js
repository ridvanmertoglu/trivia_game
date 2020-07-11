import React, {useState, useEffect, useRef} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import {connect} from 'react-redux';

const Main = (props) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [allAnswer, setAllAnswer] = useState();
  const [time, setTime] = useState(15);

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  /*setTimeout(() => {
    setTime(time - 1);
  }, 1000);*/

  useEffect(() => {
    //setTime(15);

    let answerList2 = [];
    setAnswerList([...answerList2]);
    props.questions[questionNumber].incorrect_answers.forEach((a) => {
      answerList2.push(a);
    });
    answerList2.push(props.questions[questionNumber].correct_answer);
    shuffle(answerList2);
    setAnswerList([...answerList2]);
  }, [questionNumber]);

  useEffect(() => {
    if (time === 0) {
      Alert.alert('time is up');
    }
  }, [time]);
  return (
    <View style={{marginTop: 50, alignItems: 'center'}}>
      <Text>{props.questions[questionNumber].question}</Text>
      <Text>{time}</Text>
      {answerList.map((item) => (
        <Button
          title={item}
          onPress={() =>
            item === props.questions[questionNumber].correct_answer
              ? setQuestionNumber(questionNumber + 1)
              : Alert.alert('asdad')
          }
        />
      ))}
    </View>
  );
};

const mapStateToProps = ({questionsReducer}) => {
  const {questions} = questionsReducer;
  return {questions};
};

export default connect(mapStateToProps, {})(Main);

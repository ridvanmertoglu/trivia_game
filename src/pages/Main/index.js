import React, {useState, useEffect, useRef} from 'react';
import {Text, View, Button, Alert, Modal} from 'react-native';
import {connect} from 'react-redux';
import GameModal from '../../components/GameModal';

const Main = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [showFalseModal, setShowFalseModal] = useState(false);
  const [showTrueModal, setShowTrueModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [time, setTime] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let allAnswerList = [];
    setAnswerList([...allAnswerList]);
    props.questions[questionNumber].incorrect_answers.forEach((element) => {
      allAnswerList.push(element);
    });
    allAnswerList.push(props.questions[questionNumber].correct_answer);
    _shuffle(allAnswerList);
    setAnswerList([...allAnswerList]);
  }, [questionNumber]);

  useEffect(() => {
    if (time === 0) {
      setShowTimeModal(true);
    }
  }, [time]);

  _shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  _onClickNextQuestion = () => {
    setTime(15);
    setQuestionNumber(questionNumber + 1);
    setShowTrueModal(false);
  };

  _correctAnswer = () => {
    setTotalPoints(totalPoints + (questionNumber + 1) * 5);
    setShowTrueModal(true);
  };

  _onClickMainMenu = () => {
    props.navigation.navigate('Welcome');
    setTotalPoints(0);
  };

  return (
    <View style={{marginTop: 50, alignItems: 'center'}}>
      <Text>{props.questions[questionNumber].question}</Text>
      <Text>{time}</Text>
      {answerList.map((item) => (
        <Button
          title={item}
          onPress={() =>
            item === props.questions[questionNumber].correct_answer
              ? _correctAnswer()
              : setShowFalseModal(true)
          }
        />
      ))}
      {showTrueModal ? (
        <Modal transparent visible={showTrueModal}>
          <GameModal
            icon="✓"
            mainDescription="Correct"
            subDescriptionOne={`You earned ${(questionNumber + 1) * 5} points`}
            subDescriptionTwo={`Total: ${totalPoints} points`}
            buttonName="Next Question"
            buttonAction={() => _onClickNextQuestion()}
          />
        </Modal>
      ) : null}

      {showFalseModal ? (
        <Modal transparent visible={showFalseModal}>
          <GameModal
            icon="X"
            mainDescription="Wrong"
            subDescriptionOne="You failed."
            subDescriptionTwo={`Total: ${totalPoints} points`}
            buttonName="Main Menu"
            buttonAction={() => _onClickMainMenu()}
          />
        </Modal>
      ) : null}

      {showTimeModal ? (
        <Modal transparent visible={showTimeModal}>
          <GameModal
            icon="!"
            mainDescription="Time is up!"
            subDescriptionOne="You failed."
            subDescriptionTwo={`Total: ${totalPoints} points`}
            buttonName="Main Menu"
            buttonAction={() => _onClickMainMenu()}
          />
        </Modal>
      ) : null}
    </View>
  );
};

const mapStateToProps = ({questionsReducer}) => {
  const {questions} = questionsReducer;
  return {questions};
};

export default connect(mapStateToProps, {})(Main);

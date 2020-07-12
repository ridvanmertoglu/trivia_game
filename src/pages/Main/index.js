import React, {useState, useEffect} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import GameModal from '../../components/GameModal';
import {styles} from './styles';

const Main = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [showFalseModal, setShowFalseModal] = useState(false);
  const [showTrueModal, setShowTrueModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
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
    if (questionNumber === 9) {
      setShowFinishModal(true);
    } else {
      setShowTrueModal(true);
    }
  };

  _onClickMainMenu = () => {
    props.navigation.navigate('Welcome');
    setTotalPoints(0);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.shadow]}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Question</Text>
          <Text style={styles.headerText}>{questionNumber + 1}/10</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Points</Text>
          <Text style={styles.headerText}>{totalPoints}</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Remaining time</Text>
          <Text style={styles.headerText}>{time}</Text>
        </View>
      </View>
      <View style={[styles.questionContainer, styles.shadow]}>
        <Text style={styles.question}>
          {props.questions[questionNumber].question}
        </Text>
      </View>

      {answerList.map((item) => (
        <TouchableOpacity
          onPress={() =>
            item === props.questions[questionNumber].correct_answer
              ? _correctAnswer()
              : setShowFalseModal(true)
          }>
          <View style={[styles.answerButton, styles.shadow]}>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {showTrueModal ? (
        <Modal transparent visible={showTrueModal}>
          <GameModal
            icon="✓"
            mainDescription="Correct"
            subDescriptionOne={`You earned ${(questionNumber + 1) * 5} points`}
            subDescriptionTwo={`Total: ${totalPoints} points`}
            buttonName="Next Question"
            extraStyle={styles.trueModal}
            buttonAction={() => _onClickNextQuestion()}
          />
        </Modal>
      ) : null}

      {showFinishModal ? (
        <Modal transparent visible={showFinishModal}>
          <GameModal
            icon="★"
            mainDescription="You won!"
            subDescriptionOne="All answers are correct."
            subDescriptionTwo={`Total: ${totalPoints} points`}
            buttonName="Main Menu"
            extraStyle={styles.trueModal}
            buttonAction={() => _onClickMainMenu()}
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
            extraStyle={styles.falseModal}
            buttonAction={() => _onClickMainMenu()}
          />
        </Modal>
      ) : null}

      {showTimeModal ? (
        <Modal transparent visible={showTimeModal}>
          <GameModal
            icon="!"
            mainDescription="Time's up!"
            subDescriptionOne="You are late,time's up."
            subDescriptionTwo={`Total: ${totalPoints} points`}
            buttonName="Main Menu"
            extraStyle={styles.timeModal}
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

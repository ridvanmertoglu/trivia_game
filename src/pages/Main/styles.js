import {Dimensions} from 'react-native';

export const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 10,
    backgroundColor: '#85C1E9',
    marginTop: 50,
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fiftyJokerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6fbbd3',
    height: 80,
    marginTop: 50,
    margin: 5,
  },
  question: {
    fontSize: 15,
    fontWeight: '400',
    margin: 10,
  },
  answerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AED6F1',
    margin: 10,
    height: 40,
  },

  answerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08e8de',
    width: 250,
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  trueModal: {
    backgroundColor: '#52cc00',
  },
  falseModal: {
    backgroundColor: '#eb5757',
  },
  timeModal: {
    backgroundColor: '#7f0000',
  },
};

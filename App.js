import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/store/reducers';
import {getQuestions} from './src/api/questions';
import Init from './src/helpers/Init';
import Navigator from './src/pages/Navigator';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  /*_getQuestions = () => {
    getQuestions()
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/

  render() {
    return (
      <Provider store={store}>
        <Init />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

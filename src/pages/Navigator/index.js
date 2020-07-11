import Welcome from '../Welcome';
import Main from '../Main';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

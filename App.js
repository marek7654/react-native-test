import {createStackNavigator,createAppContainer} from 'react-navigation';

import AllUsersScreen from './pages/AllUsersScreen';
import AddEditUserScreen from './pages/AddEditUserScreen';

const App = createStackNavigator({
  AllUsersScreen: {
    screen: AllUsersScreen,
    navigationOptions: {
      title: 'All Users Screen',
      headerStyle: { backgroundColor: '#217D9F' },
      headerTintColor: '#ffffff',
    },
  },
  AddEditUserScreen: {
    screen: AddEditUserScreen,
    navigationOptions: {
      headerStyle: { backgroundColor: '#217D9F' },
      headerTintColor: '#ffffff',
    },
  },
});

export default createAppContainer(App);
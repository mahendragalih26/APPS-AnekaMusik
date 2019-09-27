import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import Home from '../Screens/Page/Category';
import Detail from '../Screens/Page/Detail';
import Wishlist from '../Screens/Page/Wishlist';
import Splash from '../Screens/Page/Splash';

// import Splash from '../Screens/Splash';

const AuthStack = createStackNavigator(
  {
    SigninScreen: {
      screen: Login,
    },
    SignupScreen: {
      screen: Register,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    DetailScreen: {
      screen: Detail,
    },
    WishListScreen: {
      screen: Wishlist,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const InitialNavigation = createSwitchNavigator({
  splashScreen: Splash,
  AppNavigator: {screen: AppNavigator},
});

export default AppContainer = createAppContainer(InitialNavigation);

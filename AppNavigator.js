import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import SelectAnimal from './screens/SelectAnimal';
import HowTo from './screens/HowTo';
import Animal from './screens/Animal';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    SelectAnimal: { screen: SelectAnimal },
    HowTo: { screen: HowTo },
    Animal: { screen: Animal },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
      gesturesEnabled: false,
    },
  }
);

const Navigator = createAppContainer(AppNavigator);
export default Navigator;

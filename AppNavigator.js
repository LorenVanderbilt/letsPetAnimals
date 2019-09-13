import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import SelectAnimal from './screens/SelectAnimal';
import Corgi from './screens/Corgi';
import Robin from './screens/Robin';
import Fawn from './screens/Fawn';
import Cat from './screens/Cat';
import HowTo from './screens/HowTo';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    SelectAnimal: { screen: SelectAnimal },
    HowTo: { screen: HowTo },
    Corgi: { screen: Corgi },
    Cat: { screen: Cat },
    Fawn: { screen: Fawn },
    Robin: { screen: Robin },
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

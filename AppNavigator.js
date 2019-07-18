import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Pets from './screens/Pets';
import Butter from './screens/Butter';
import Robin from './screens/Robin';
import Fawn from './screens/Fawn';
import Cat from './screens/Cat';
import HowTo from './screens/HowTo';


const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Pets: { screen: Pets },
    HowTo: { screen: HowTo },
    Butter: { screen: Butter },
    Cat: { screen: Cat },
    Fawn: { screen: Fawn },
    Robin: { screen: Robin },
    
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const Navigator = createAppContainer(AppNavigator);
export default Navigator;

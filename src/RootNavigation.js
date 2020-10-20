import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import CreateScreen from './Screens/CreateScreen';
import SigninScreen from './Screens/SigninScreen';
import SigninEmailScreen from './Screens/SigninEmailScreen';
import SigninPhoneScreen from './Screens/SigninPhoneScreen';


const RootNavigation = createStackNavigator(
    {
        SplashScreen:{
            screen: SplashScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        LoginScreen:{
            screen: LoginScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        CreateScreen:{
            screen: CreateScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        SigninScreen:{
            screen: SigninScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        SigninEmailScreen:{
            screen: SigninEmailScreen,
            navigationOptions:{
                headerShown:false
            }
        },
        SigninPhoneScreen:{
            screen: SigninPhoneScreen,
            navigationOptions:{
                headerShown:false
            }
        },
    },
    {
        initialRouteName:'SplashScreen'
    }
)

const App = createAppContainer(RootNavigation);
export default App;

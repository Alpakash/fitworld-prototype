/**
 * @format
 */
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { AppRegistry, AsyncStorage } from 'react-native'
import App from './src/App';
import { name as appName } from './app.json';



enableScreens();

AppRegistry.registerComponent(appName, () => App);

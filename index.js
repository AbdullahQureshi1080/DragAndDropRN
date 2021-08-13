/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import AppFour from './AppFour';
import AppClass from './AppClass';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => AppTwo);
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => AppThree);
AppRegistry.registerComponent(appName, () => AppFour);
// AppRegistry.registerComponent(appName, () => AppClass);

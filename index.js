/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TaskContext,{Task} from './src/DBScheme';

const {RealmProvider} = TaskContext;
AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {PlayBackService} from './AudioPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlayBackService);

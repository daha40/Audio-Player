import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PlayBackService} from '../../AudioPlayerServices';

function ControlCenter() {
  const playBackState = usePlaybackState();

  //skip to next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  //skip to previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const toggelePlayBack = async (PlayBack: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (PlayBack === State.Paused || PlayBack === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => toggelePlayBack(playBackState)}>
        <Icon
          style={styles.icon}
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          size={40}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

export default ControlCenter;

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, StyleSheet, Dimensions,Image, FlatList, Text} from 'react-native';
import TrackPlayer,{Event,Track,useTrackPlayerEvents} from 'react-native-track-player';
//Data
import { playListData } from '../constants';
//Components
import ControlCenter from '../components/ControlCenter';
import SongSlider from '../components/SongSlider';
import SoundInfo from '../components/SoundInfo';

const {width} = Dimensions.get('window')


const SoundPlayer = () => {
    const [Track,setTrack] = useState<Track | null>()

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
      switch (event.type) {
        case Event.PlaybackTrackChanged:
            const PlaynigTrack = await TrackPlayer.getTrack(event.nextTrack)
            setTrack(PlaynigTrack)
            break;  
      }
  }) 


  
  const renderArtWork = () => {
    return (
        <View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
              {Track?.artwork && (
                <Image 
                style={styles.albumArtImg}
                source={{uri: Track?.artwork?.toString()}}
                />
              )}
            </View>
        </View>
    )
  }


  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <SoundInfo Track={Track}/>
      <SongSlider/>
      <ControlCenter/>
      <View style={styles.containerByTxt}>
        <Text style={styles.ByTxt}>By Abderahmane Kateb</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  containerByTxt:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:3,
  },
  ByTxt:{
    color:'#fff',
    fontSize:10,
    fontWeight:'300',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

export default SoundPlayer;
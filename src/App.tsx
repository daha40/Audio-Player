/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {setupPlayer,addTrack} from '../AudioPlayerServices';
import SoundPlayer from './Screens/SoundPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setisPlayerReady] = useState(false)

  async function setup(){
      let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }
    setisPlayerReady(isSetup)
  }  


  useEffect(() => {
    setup()
  }, [])
  

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SoundPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;

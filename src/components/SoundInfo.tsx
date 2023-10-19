import React, {PropsWithChildren} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Track} from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
  Track: Track | null | undefined;
}>;

const SoundInfo = ({Track}: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{Track?.title}</Text>
        <Text style={styles.artist}>
          {Track?.artist} . {Track?.album}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
  },
  artist: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
});

export default SoundInfo;

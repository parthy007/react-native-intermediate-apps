import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player'
import Icon from "react-native-vector-icons/MaterialIcons"
import { playbackServices } from '../../musicPlayerServices'

function ControlCenter() {

    const playBackState = usePlaybackState();

    const skipToNext = async() =>{
        await TrackPlayer.skipToNext()
    }

    const skipToPrevious = async() =>{
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback) => {
        let currentTrack = await TrackPlayer.getActiveTrack()
        
        if(currentTrack !== null){
            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play()
            }
            else{
                await TrackPlayer.pause()
            }
        }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon 
                style={styles.icon}
                size={40}
                name="skip-previous"
            />
        </Pressable>
        <Pressable onPress={()=>togglePlayback(playBackState)}>
            <Icon 
                style={styles.icon}
                size={75}
                name={playBackState === State.Playing ? "pause":"play-arrow"}
            />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon 
                style={styles.icon}
                size={40}
                name="skip-next"
            />
        </Pressable>
    </View>
  )
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

export default ControlCenter

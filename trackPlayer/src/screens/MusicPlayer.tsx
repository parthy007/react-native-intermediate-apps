import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { playListData } from '../constants'
import SongInfo from '../components/Songinfo'
import SongSlider from '../components/SongSlider'
import ControlCenter from '../components/ControlCenter'
import TrackPlayer,{
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'



const {width} = Dimensions.get('window')

export default function MusicPlayer() {
    
    const [track,setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged],async event =>{
        switch (event.type) {
            case Event.PlaybackActiveTrackChanged:
                const {track} = event;
                setTrack(track)
                break;
        
        }
    })
    
    const renderArtwork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{uri: track?.artwork?.toString()}}
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
                renderItem={renderArtwork}
                keyExtractor={song=>song.id.toString()}
            />
            <SongInfo track={track}/>
            <SongSlider/>
            <ControlCenter/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
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
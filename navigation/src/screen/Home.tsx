import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title='Go to details'
        // onPress={()=>navigation.navigate("Details",{
        //   productId: "87"
        // })}
        onPress={()=>navigation.replace("Details",{
          productId:"423"
        })}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  smallText: {
      color: "#000000"
  }
})
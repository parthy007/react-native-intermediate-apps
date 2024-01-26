import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"
import { useNavigation } from '@react-navigation/native'

type DetailsProps = NativeStackScreenProps<RootStackParamList,"Details">

 const Details = ({route}:DetailsProps) => {

  const {productId} = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title='Go to home Page'
        // onPress={()=>navigation.navigate("Home")}
        // onPress={()=>navigation.goBack()}
        // onPress={()=>navigation.pop(2)}
        onPress={()=>navigation.popToTop()}
      />
    </View>
  )
}

export default Details

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
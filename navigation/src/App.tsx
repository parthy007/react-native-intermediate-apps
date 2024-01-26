import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

//Screen
import Home from './screen/Home';
import Details from './screen/Details';

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title:"Trending Productsssssss"
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title:"Product Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

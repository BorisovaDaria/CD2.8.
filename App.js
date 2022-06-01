import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './Screens/ScreenFirst';
import SecondPage from './Screens/ScreenSecond';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="FirstPage"
          
          component={FirstPage}
          options={{
            title: 'Регистрация',
            headerStyle: {
              backgroundColor: '#fbcabb', 
            },
            headerTintColor: '#cabbfb', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          
          options={{
            title: 'Приветствие', 
            headerStyle: {
              backgroundColor: '#fbcabb',
            },
            headerTintColor: '#cabbfb', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
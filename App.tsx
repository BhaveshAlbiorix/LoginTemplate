
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from './src/pages/Initial';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='init'>
        <Stack.Screen name="init" options={{ title: "Initial Page" }} component={Initial} />
        <Stack.Screen name="login" options={{ title: "Sign In" }} component={Login} />
        <Stack.Screen name="registration" options={{ title: "Sign Up" }} component={Registration} />
        <Stack.Screen name="home" options={{ title: "Home" }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

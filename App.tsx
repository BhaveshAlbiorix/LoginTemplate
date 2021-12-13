
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from './src/pages/Initial';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Home from './src/pages/Home';
import { Image } from 'react-native';
import { ProductDetails } from './src/pages/ProductDetail';
import authContext from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://picsum.photos/s200/300" }}
    />
  );
}

const App = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      <NavigationContainer  >
        <Stack.Navigator initialRouteName='init'>
          <Stack.Screen name="init" options={{ title: "Initial Page" }} component={Initial} />
          <Stack.Screen name="login" options={{ title: "Sign In" }} component={Login} />
          <Stack.Screen name="registration" options={{ title: "Sign Up" }} component={Registration} />
          <Stack.Screen name="productDescription" options={{ title: "Product Description" }} component={ProductDetails} />
          <Stack.Screen name="home" options={{ title: "Home", headerRight: (props: any) => <LogoTitle {...props} /> }} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </authContext.Provider>
  );
};

export default App;

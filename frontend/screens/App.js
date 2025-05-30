import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConsentScreen from './screens/ConsentScreen';
import ControlPanel from './screens/ControlPanel';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Consent">
        <Stack.Screen name="Consent" component={ConsentScreen} />
        <Stack.Screen name="ControlPanel" component={ControlPanel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
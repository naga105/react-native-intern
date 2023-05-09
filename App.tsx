import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateMatrix from './src/components/CreateMatrix';
import MatrixDashboard from './src/components/MatrixDashboard';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="add matrix"
          component={CreateMatrix}
        />
        <Stack.Screen name="dashboard" component={MatrixDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

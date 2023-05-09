import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateMatrix from './src/components/CreateMatrix';
import MatrixDashboard from './src/components/MatrixDashboard';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Approval_Matrix"
          options={{
            title: 'Approval Matrix',
            headerStyle: {
              backgroundColor: '#e98c1b',
            },
            headerShadowVisible: false, // applied here
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          component={MatrixDashboard}
        />
        <Stack.Screen
          name="Create_Matrix"
          component={CreateMatrix}
          options={{
            title: 'Approval Matrix',
            headerStyle: {
              backgroundColor: '#e98c1b',
            },
            headerTintColor: '#fff',
            headerShadowVisible: false, // applied here
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateMatrix from './src/components/CreateMatrix';
import MatrixDashboard from './src/components/MatrixDashboard';
import UpdateMatrix from './src/components/UpdateMatrix';
import ListContext from './src/utils/ListContext';
import {datalist} from './fakedata';
function App() {
  const Stack = createNativeStackNavigator();
  const createNew = (gen, element) => {
    datalist[gen].push(element);
    console.log(element);
    setDataList({
      data: datalist,
      new: createNew,
      update: updateState,
    });
    // console.log(dataList);
  };
  const updateState = () => {};
  const [dataList, setDataList] = useState({
    data: datalist,
    new: createNew,
    update: updateState,
  });
  return (
    <ListContext.Provider value={dataList}>
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
          <Stack.Screen
            name="Update_Matrix"
            component={UpdateMatrix}
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
    </ListContext.Provider>
  );
}
export default App;

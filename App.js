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
      updating: updateState,
    });
    // console.log(dataList);
  };
  const updateState = (type, updateElement) => {
    console.log('============');
    console.log(updateElement);
    // let newdatalist = datalist[type].map(e => {
    //   e.id === updateElement.id
    //     ? {
    //         ...e,
    //         matrixName: updateElement.matrixName,
    //         MinIDR: updateElement.MinIDR,
    //         MaxIDR: updateElement.MaxIDR,
    //         NoA: updateElement.NoA,
    //       }
    //     : e;
    // });
    const elementIndex = datalist[type].findIndex(
      e => e.id === updateElement.id,
    );
    console.log(elementIndex);
    datalist[type][elementIndex].matrixName = updateElement.matrixName;
    datalist[type][elementIndex].MinIDR = updateElement.MinIDR;
    datalist[type][elementIndex].MaxIDR = updateElement.MaxIDR;
    datalist[type][elementIndex].NoA = updateElement.NoA;
    console.log(datalist[type][elementIndex]);
    setDataList({
      data: datalist,
      new: createNew,
      updating: updateState,
    });
  };
  const [dataList, setDataList] = useState({
    data: datalist,
    new: createNew,
    updating: updateState,
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

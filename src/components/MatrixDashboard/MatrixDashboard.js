import {React} from 'react';
import {Text, View, Button} from 'react-native';
import style from './style.module.css';
const MatrixDashboard = ({navigation}) => {
  const onClickHandler = () => {
    navigation.navigate('Create_Matrix');
  };
  return (
    <View style={style.container}>
      <View style={style.viewBox}>
        <View style={style.headerBox}>
          <Text style={style.header}>Create New Approval Matrix</Text>
          <View style={style.breakLine}>
            <View style={{flex: 1, height: 1, backgroundColor: '#D7D7D9'}} />
          </View>
        </View>
        <View>
          <View style={style.buttons}>
            <Button
              color="#e98c1b"
              title="ADD TO: LIST"
              onPress={onClickHandler}
            />
            <Button color="#e98c1b" title="RESET" />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MatrixDashboard;

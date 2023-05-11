import {React, useState, useContext} from 'react';
import {Text, View, Button, Pressable} from 'react-native';
import style from './style.module.css';
import ListContext from '../../utils/ListContext';
import DropdownList from './utils/DropdownList';
const MatrixDashboard = ({navigation}) => {
  const datalist = useContext(ListContext);
  const [visible, setVisible] = useState({
    default: false,
    transferOnline: false,
  });
  const toggleDropdown = element => {
    setVisible({...visible, [element]: !visible[element]});
  };
  const onClickHandler = () => {
    navigation.navigate('Create_Matrix');
  };
  return (
    <View style={style.container}>
      <View style={style.viewBox}>
        <View style={style.headerBox}>
          <Pressable
            onPress={() => {
              navigation.navigate('Create_Matrix');
            }}>
            <View style={style.addButton}>
              <View style={style.crossButton}>
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    fontSize: 22,
                    color: '#171c8f',
                    textAlign: 'center',
                    fontWeight: '400',
                  }}>
                  +
                </Text>
              </View>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 5,
                  marginRight: 5,
                  alignSelf: 'center',
                }}>
                Tambah New Matrix
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={style.breakLine}>
          <View style={{flex: 1, height: 1, backgroundColor: '#D7D7D9'}} />
        </View>
        <View>
          <View style={style.buttons}>
            <Button
              color="#e98c1b"
              title="ADD TO: LIST"
              onPress={onClickHandler}
            />
            <Button
              color="#e98c1b"
              title="RESET"
              onPress={() => {
                console.log(datalist.data);
              }}
            />
          </View>
        </View>
        <View>
          <DropdownList datalist={datalist} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};
export default MatrixDashboard;

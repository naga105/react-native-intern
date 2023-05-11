import {React} from 'react';
import {View, Pressable} from 'react-native';
import DropdownElement from './DropdownElement';

const DropdownList = ({datalist, navigation}) => {
  console.log(datalist.data + 'new');
  return (
    <View>
      {datalist.data.TransferOnline.map(e => {
        return (
          <Pressable
            key={e.id}
            onPress={() => {
              navigation.navigate('Update_Matrix', {
                Matrix: e,
              });
            }}>
            <DropdownElement data={e} />
          </Pressable>
        );
      })}
    </View>
  );
};
export default DropdownList;

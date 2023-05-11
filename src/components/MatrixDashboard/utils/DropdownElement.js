import {React} from 'react';
import {View, Text} from 'react-native';
import style from './style.module.css';
const DropdownElement = ({data}) => {
  return (
    <View style={style.container}>
      <View style={style.matrixList}>
        <Text style={{fontSize: 12, color: 'black'}}>
          Range Limit of Approval
        </Text>
        <View style={style.rolpBox}>
          <View style={style.rolpElement}>
            <Text style={{fontSize: 12, color: '#171C8F'}}>Minimum IDR</Text>
            <Text style={{fontSize: 12, color: '#171C8F', fontWeight: 'bold'}}>
              {data.MinIDR}
            </Text>
          </View>
          <View style={style.rolpElement}>
            <Text style={{fontSize: 12, color: '#171C8F'}}>Maximum IDR</Text>
            <Text style={{fontSize: 12, color: '#171C8F', fontWeight: 'bold'}}>
              {data.MaxIDR}
            </Text>
          </View>
        </View>
      </View>
      <View style={style.breakLine}>
        <View style={{flex: 1, height: 1, backgroundColor: '#D7D7D9'}} />
      </View>
      <View style={style.matrixList}>
        <Text style={{fontSize: 12, color: 'black'}}>Number of Approval</Text>
        <Text style={{fontSize: 12, color: '#171C8F', fontWeight: 'bold'}}>
          {data.NoA}
        </Text>
      </View>
      <View style={style.breakLine}>
        <View style={{flex: 1, height: 1, backgroundColor: '#D7D7D9'}} />
      </View>
      {data.Approver?.map(e => {
        return (
          <View style={style.matrixList} key={e.ApproverId}>
            <Text style={{fontSize: 12, color: 'black'}}>
              Approver {e.ApproverId}
            </Text>
            <Text style={{fontSize: 12, color: '#171C8F', width: 125}}>
              {e.ApproverName}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default DropdownElement;

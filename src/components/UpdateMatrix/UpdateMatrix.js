import {React, useState, useCallback, useMemo, useEffect} from 'react';
import {Text, View, TextInput, Button, ScrollView} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import style from './style.module.css';
const defaultInput = {
  matrixName: null,
  minRoa: null,
  maxRoa: null,
  noA: null,
};
const UpdateMatrix = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [matrix, setMatrix] = useState({
    matrixName: null,
    minRoa: null,
    maxRoa: null,
    noA: null,
  });
  const isInformationFilled = useMemo(() => {
    const isAllFilled = Object.keys(matrix).every(key => {
      return matrix[key] !== null || '';
    });
    return isAllFilled && selectedValue !== '';
  }, [matrix, selectedValue]);
  const onUpdate = useCallback(
    (inputname, text) => {
      setMatrix({...matrix, [inputname]: text});
    },
    [matrix],
  );
  const resetHandler = () => {
    setMatrix({...defaultInput});
    setSelectedValue(null);
  };
  const onClickHandler = () => {
    console.log(isInformationFilled);
    console.log(matrix);
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.viewBox}>
          <View style={style.headerBox}>
            <Text style={style.header}>Update Approval Matrix</Text>
            <View style={style.breakLine}>
              <View style={{flex: 1, height: 1, backgroundColor: '#D7D7D9'}} />
            </View>
          </View>
          <View style={style.inputArea}>
            <Text style={style.inputLabel}>Approval Matrix Alias</Text>
            <View style={style.input}>
              <TextInput
                style={style.inputField}
                onChangeText={text => onUpdate('matrixName', text)}
                value={matrix.matrixName}
                placeholder="Input Matrix Name"
              />
            </View>
            <View>
              <Text style={style.inputLabel}>Feature</Text>
              <SelectList
                data={[
                  {key: 'Default', value: 'default'},
                  {key: 'TransferOnline', value: 'Transfer Online'},
                ]}
                setSelected={(key, value) => {
                  console.log(selectedValue);
                  setSelectedValue(key);
                }}
                boxStyles={{borderRadius: 20, borderColor: '#b7b3b3'}}
                placeholder="Select Feature"
              />
            </View>
            <View>
              <Text style={style.inputLabel}>Range of Approval (Minimum)</Text>
              <View style={style.inputIDR}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  IDR
                </Text>
                <TextInput
                  style={style.inputField}
                  onChangeText={text => onUpdate('minRoa', text)}
                  value={matrix.minRoa}
                  placeholder="Input Text Here"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View>
              <Text style={style.inputLabel}>Range of Approval (Maximum)</Text>
              <View style={style.inputIDR}>
                <Text
                  style={{
                    textAlignVertical: 'center',
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  IDR
                </Text>
                <TextInput
                  style={style.inputField}
                  onChangeText={text => onUpdate('maxRoa', text)}
                  value={matrix.maxRoa}
                  placeholder="Input Text Here"
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View>
              <Text style={style.inputLabel}>Number of Approval </Text>
              <View style={style.input}>
                <TextInput
                  style={style.inputField}
                  onChange={onUpdate}
                  onChangeText={text => onUpdate('noA', text)}
                  value={matrix.noA}
                  keyboardType="numeric"
                  placeholder="Number of Approval"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={style.buttons}>
              <Button
                color="#e98c1b"
                title="UPDATE TO: LIST"
                onPress={onClickHandler}
              />
              <Button color="#e98c1b" title="DELETE" onPress={resetHandler} />
            </View>
          </View>
        </View>
      </View>
      <View style={style.footer} />
    </ScrollView>
  );
};
export default UpdateMatrix;

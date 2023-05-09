import {React, useState, useCallback} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View, TextInput, Button, ScrollView} from 'react-native';
import style from './style.module.css';
const defaultInput = {
  matrixName: '',
  minRoa: '',
  maxRoa: '',
  NoA: '',
};
const CreateMatrix = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [matrix, setMatrix] = useState({
    ...defaultInput,
  });
  let isDisable = JSON.stringify(matrix) === JSON.stringify(defaultInput);

  const onUpdate = useCallback(
    (inputname, text) => {
      setMatrix((matrix.inputname = text));
    },
    [matrix],
  );
  const resetHandler = () => {
    setMatrix({...defaultInput});
  };
  const onClickHandler = () => {
    return 1;
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.viewBox}>
          <View style={style.headerBox}>
            <Text style={style.header}>Create New Approval Matrix</Text>
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
              <View style={style.input}>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="Default" value="Default" />
                  <Picker.Item
                    label="Transfer Online"
                    value="Transfer Online"
                  />
                </Picker>
              </View>
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
                  onChangeText={text => onUpdate('NoA', text)}
                  value={matrix.NoA}
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
                title="ADD TO: LIST"
                disabled={isDisable}
                onPress={onClickHandler}
              />
              <Button
                color="#e98c1b"
                title="RESET"
                disabled={isDisable}
                onPress={resetHandler}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={style.footer} />
    </ScrollView>
  );
};
export default CreateMatrix;

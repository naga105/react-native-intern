import {React, useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './style.module.css';

const DropdownButton = ({text, pressed}) => {
  const [vertcolor, setVertcolor] = useState('#cbe642');
  let touchProps = {
    activeOpacity: 1,
    style: pressed ? style.btnPress : style.btnNormal,
  };
  let textProps = {
    activeOpacity: 1,
    style: pressed ? style.catgTextPress : style.catgTextNormal,
  };
  return (
    <View {...touchProps}>
      <View style={style.buttonText}>
        <View style={{width: 150}}>
          <Text {...textProps}>{text}</Text>
        </View>
        <View style={{width: 150}}>
          <Text {...textProps}>{text}</Text>
        </View>
      </View>
    </View>
  );
};
export default DropdownButton;

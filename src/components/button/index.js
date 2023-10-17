import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';

const Button = ({
  width,
  height,
  bgColor,
  marginTop,
  text,
  fontSize,
  color,
  onClick,
}) => {
  return (
    <TouchableOpacity
      style={[
        style.button,
        width && {width},
        height && {height},
        bgColor && {backgroundColor: bgColor},
        marginTop && {marginTop},
      ]}
      onPress={onClick}>
      <Text
        style={[style.buttonText, fontSize && {fontSize}, color && {color}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

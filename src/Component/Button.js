import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button(props) {
  return (
    <View>
      <TouchableOpacity style={props.styleButton} onPress={props.onClickButton}>
        <Text style={props.styleButtonText}>{props.Text}</Text>
      </TouchableOpacity>
    </View>
  );
}

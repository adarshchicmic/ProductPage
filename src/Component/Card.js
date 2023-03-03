import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Button from './Button';
import {constant} from './Constant';

export default function Card(props) {
  return (
    <View style={styles.ContainerCart}>
      <TouchableOpacity style={styles.CartContainer}>
        <Image style={props.ImageStyleCart} source={{uri: props.ImageLink}} />
        <Text style={styles.priceText}>{props.Price}</Text>
        <Text style={styles.ProductTitleStyle}>{props.ProductTitle}</Text>
        <Button styleButton={styles.ButtonCart} Text={constant.buyNow} />
        <Button styleButton={styles.ButtonCart} Text={constant.addToCart} />
        {/* <Text>{props.ProductDescription}</Text> */}
      </TouchableOpacity>
    </View>
  );
}

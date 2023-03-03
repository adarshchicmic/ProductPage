import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Button from './Button';
import {styles} from './Styles';
import {constant} from './Constant';
export default function Home({navigation}) {
  const onClickButton = () => {
    navigation.navigate('Product');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
        <Button
          Text={constant.product}
          styleButton={styles.Button}
          styleButtonText={styles.ButtonText}
          onClickButton={onClickButton}
        />
        <Button
          Text={constant.favorits}
          styleButton={styles.Button}
          styleButtonText={styles.ButtonText}
        />
      </View>
    </SafeAreaView>
  );
}

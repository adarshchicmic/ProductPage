import {View, Text, FlatList, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {MyContext} from '../../App';
import Button from './Button';
import {styles} from './Styles';
import Card from './Card';

export default function Product() {
  const {Data, setData} = useContext(MyContext);
  useEffect(() => {
    fun();
  });
  const fun = () => {
    console.log(Data, 'yedjakhskjlfhlak');
    console.log(Data[0].id, 'jlkasdfjlasdj');
  };
  const renderItems = ({item}) => {
    <View></View>;
  };
  return (
    <View style={styles.container}>
      <Text>Product </Text>
      <FlatList
        data={Data}
        numColumns={2}
        renderItem={({item}) => (
          <View>
            {/* <Text>{item.id}</Text>
            <Image
              source={{uri: item.image}}
              style={{height: 200, width: 100}}
            />
            <Text>{item.title}</Text>
            <Text> {item.description}</Text> */}

            <Card
              Price={item.price}
              ProductTitle={item.title}
              ImageStyleCart={styles.ProductImage}
              ImageLink={item.image}
              ProductDescription={item.description}
            />
          </View>
        )}
        // renderItem={renderItems}
      />
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Component/Home';
import Product from './src/Component/Product';
import Favorits from './src/Component/Favorits';
import ProductFavorits from './src/Component/ProductFavorits';
import axios from 'axios';
const Stack = createNativeStackNavigator();
export const MyContext = React.createContext();
const App = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    GetAxios();
  }, []);

  const GetAxios = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setData(response.data);
    console.log(response.data);
  };
  return (
    <MyContext.Provider value={{Data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Favorits" component={Favorits} />
          <Stack.Screen name="ProductFavorits" component={ProductFavorits} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
};

export default App;

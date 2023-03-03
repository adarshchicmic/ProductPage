import axios from 'axios';

export const GetAxios = () => {
    const response = axios.get('https://fakestoreapi.com/products');
    let responseGet;
    response.then(res => console.log(res.data));
    console.log(responseGet);
    return responseGet;
  };
